import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 14 },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 31 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 31 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 11 },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 23 },
  { id: 6, firstName: 'Melisandre', lastName: 'Asshai', age: 30 },
  { id: 7, firstName: 'Ferrara', lastName: 'Clifford', age: 44 },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36 },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', age: 60 },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', flex: 1, minWidth: 130 },
  { field: 'lastName', headerName: 'Last name', flex: 1, minWidth: 130 },
  { field: 'age', headerName: 'Age', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    flex: 1.2,
    minWidth: 170,
    sortable: false,
    valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`.trim(),
  },
];

const averageAge = (
  rows.reduce((sum, user) => sum + user.age, 0) / rows.length
).toFixed(1);

const DashboardPage = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={4} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Total Users
              </Typography>
              <Typography variant="h5">{rows.length}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Average Age
              </Typography>
              <Typography variant="h5">{averageAge}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }} variant="outlined">
            <BarChart
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              series={[
                { data: [35, 42, 25, 34], label: 'Series 1', color: '#3f51b5' },
                { data: [50, 7, 49, 29], label: 'Series 2', color: '#f9a825' },
              ]}
              height={260}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{ p: 2, display: 'flex', justifyContent: 'center' }}
            variant="outlined"
          >
            <PieChart
              width={260}
              height={260}
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: '10', color: '#3f51b5' },
                    { id: 1, value: 15, label: '15', color: '#f9a825' },
                    { id: 2, value: 20, label: '20', color: '#ef5350' },
                  ],
                },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 2, p: 2 }} variant="outlined">
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Users Overview
        </Typography>

        <Box sx={{ width: '100%', height: 320 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            hideFooterSelectedRowCount
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5]}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
