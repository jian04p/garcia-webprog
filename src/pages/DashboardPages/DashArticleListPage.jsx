import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import {
  createArticle,
  getArticles,
  toggleArticleStatus,
  updateArticle,
} from '../../services/ArticleService';

const blankForm = {
  title: '',
  slug: '',
  brand: '',
  family: '',
  vibe: '',
  bestFor: '',
  image: '',
  imageAlt: '',
  summary: '',
  content: '',
  topNotes: '',
  heartNotes: '',
  baseNotes: '',
  status: 'active',
};

const splitLines = (value) =>
  String(value)
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

const joinLines = (value) => (Array.isArray(value) ? value.join('\n') : '');

const toFormState = (article) => ({
  title: article.title,
  slug: article.slug,
  brand: article.brand,
  family: article.family,
  vibe: article.vibe,
  bestFor: article.bestFor,
  image: article.image,
  imageAlt: article.imageAlt,
  summary: article.summary,
  content: joinLines(article.content),
  topNotes: joinLines(article.notes.top),
  heartNotes: joinLines(article.notes.heart),
  baseNotes: joinLines(article.notes.base),
  status: article.status,
});

const DashArticleListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [articles, setArticles] = useState([]);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  const resetForm = () => {
    setForm(blankForm);
    setErrors({});
  };

  const openModal = (article) => {
    setModal({ open: true, id: article?.id ?? null });
    setForm(article ? toFormState(article) : blankForm);
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    resetForm();
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    [
      ['title', 'Title'],
      ['brand', 'Brand'],
      ['family', 'Family'],
      ['vibe', 'Vibe'],
      ['bestFor', 'Best for'],
      ['image', 'Image URL'],
      ['summary', 'Summary'],
      ['content', 'Content'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    const slugValue = String(form.slug || form.title).trim().toLowerCase();
    if (
      slugValue &&
      articles.some((article) => article.id !== modal.id && article.slug === slugValue.replace(/[^a-z0-9-]+/g, '-'))
    ) {
      nextErrors.slug = 'Slug already exists.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextArticle = {
      title: form.title.trim(),
      slug: form.slug.trim(),
      brand: form.brand.trim(),
      family: form.family.trim(),
      vibe: form.vibe.trim(),
      bestFor: form.bestFor.trim(),
      image: form.image.trim(),
      imageAlt: form.imageAlt.trim() || `${form.title.trim()} image`,
      summary: form.summary.trim(),
      content: splitLines(form.content),
      notes: {
        top: splitLines(form.topNotes),
        heart: splitLines(form.heartNotes),
        base: splitLines(form.baseNotes),
      },
      status: form.status,
    };

    const savedArticles = modal.id
      ? updateArticle(modal.id, nextArticle)
      : createArticle(nextArticle);

    setArticles(savedArticles);
    closeModal();
  };

  const handleToggleStatus = (id) => {
    setArticles(toggleArticleStatus(id));
  };

  const filteredArticles = articles.filter((article) => {
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !query ||
      article.id.toLowerCase().includes(query) ||
      article.slug.toLowerCase().includes(query) ||
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query);

    const matchesStatus = statusFilter === 'all' || article.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 100 },
    { field: 'slug', headerName: 'Slug', flex: 1, minWidth: 150 },
    { field: 'title', headerName: 'Title', flex: 1.1, minWidth: 180 },
    {
      field: 'paragraphs',
      headerName: 'Paragraphs',
      width: 110,
      valueGetter: (_, row) => row.content.length,
    },
    {
      field: 'preview',
      headerName: 'Preview',
      flex: 1.6,
      minWidth: 280,
      valueGetter: (_, row) => row.summary,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.status === 'active' ? 'Active' : 'Inactive'}
          color={row.status === 'active' ? 'success' : 'default'}
          variant={row.status === 'active' ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 220,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={row.status === 'active' ? 'warning' : 'success'}
            onClick={() => handleToggleStatus(row.id)}
          >
            {row.status === 'active' ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  return (
    <Box sx={{ width: '100%', minWidth: 0 }}>
      <Box
        sx={{
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h4">Articles</Typography>
        <Button variant="contained" onClick={() => openModal()}>
          Add Article
        </Button>
      </Box>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
        <TextField
          label="Search articles"
          placeholder="ID, slug, title, summary"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          fullWidth
        />
        <Select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} displayEmpty>
          <MenuItem value="all">All Statuses</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
      </Stack>

      <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden' }}>
        {filteredArticles.length ? (
          <Box sx={{ height: { xs: 460, sm: 520 }, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
            />
          </Box>
        ) : (
          <Alert severity="info">No articles match your search/filter.</Alert>
        )}
      </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? 'Edit Article' : 'Add Article'}</DialogTitle>
          <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('title', 'Title')} />
                <TextField {...fieldProps('slug', 'Slug (optional)')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('brand', 'Brand')} />
                <TextField {...fieldProps('family', 'Family')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('vibe', 'Vibe')} />
                <TextField {...fieldProps('bestFor', 'Best For')} />
              </Stack>
              <TextField {...fieldProps('image', 'Image URL')} />
              <TextField {...fieldProps('imageAlt', 'Image Alt Text')} />
              <TextField {...fieldProps('summary', 'Summary', { multiline: true, rows: 3 })} />
              <TextField
                {...fieldProps('content', 'Paragraphs', {
                  multiline: true,
                  rows: 6,
                  helperText: errors.content || 'Use one paragraph per line.',
                })}
              />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  {...fieldProps('topNotes', 'Top Notes', {
                    multiline: true,
                    rows: 4,
                    helperText: 'Use one note per line.',
                  })}
                />
                <TextField
                  {...fieldProps('heartNotes', 'Heart Notes', {
                    multiline: true,
                    rows: 4,
                    helperText: 'Use one note per line.',
                  })}
                />
                <TextField
                  {...fieldProps('baseNotes', 'Base Notes', {
                    multiline: true,
                    rows: 4,
                    helperText: 'Use one note per line.',
                  })}
                />
              </Stack>
              <TextField {...fieldProps('status', 'Status', { select: true })}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </TextField>
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? 'Update Article' : 'Save Article'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;
