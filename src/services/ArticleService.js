import seededArticles from '../assets/article-content';

const STORAGE_KEY = 'fragph_articles';

const toSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const splitLines = (value) =>
  String(value)
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

const normalizeNotes = (notes = {}) => ({
  top: Array.isArray(notes.top) ? notes.top : splitLines(notes.top || ''),
  heart: Array.isArray(notes.heart) ? notes.heart : splitLines(notes.heart || ''),
  base: Array.isArray(notes.base) ? notes.base : splitLines(notes.base || ''),
});

const normalizeArticle = (article, index) => {
  const slug = article.slug || article.name || toSlug(article.title || `article-${index + 1}`);
  return {
    id: article.id || `A${String(index + 1).padStart(3, '0')}`,
    slug,
    name: slug,
    title: article.title || '',
    brand: article.brand || '',
    family: article.family || '',
    vibe: article.vibe || '',
    bestFor: article.bestFor || '',
    image: article.image || '',
    imageAlt: article.imageAlt || `${article.title || 'Article'} image`,
    summary: article.summary || '',
    content: Array.isArray(article.content) ? article.content : splitLines(article.content || ''),
    notes: normalizeNotes(article.notes),
    status: article.status || 'active',
  };
};

const getSeededArticles = () => seededArticles.map((article, index) => normalizeArticle(article, index));

const readArticles = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seeded = getSeededArticles();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }

  try {
    const parsed = JSON.parse(raw);
    return parsed.map((article, index) => normalizeArticle(article, index));
  } catch {
    const seeded = getSeededArticles();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }
};

const writeArticles = (articles) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return articles;
};

const makeUniqueSlug = (articles, nextSlug, currentId = null) => {
  let candidate = toSlug(nextSlug) || 'article';
  let suffix = 2;

  while (articles.some((article) => article.slug === candidate && article.id !== currentId)) {
    candidate = `${toSlug(nextSlug) || 'article'}-${suffix}`;
    suffix += 1;
  }

  return candidate;
};

const nextArticleId = (articles) => {
  const maxId = articles.reduce((maxValue, article) => {
    const numericId = Number(String(article.id).replace(/\D/g, '')) || 0;
    return Math.max(maxValue, numericId);
  }, 0);

  return `A${String(maxId + 1).padStart(3, '0')}`;
};

export const getArticles = () => readArticles();

export const getPublicArticles = () => readArticles().filter((article) => article.status === 'active');

export const getPublicArticleBySlug = (slug) =>
  getPublicArticles().find((article) => article.slug === slug);

export const createArticle = (article) => {
  const articles = readArticles();
  const slug = makeUniqueSlug(articles, article.slug || article.title);
  const savedArticle = normalizeArticle(
    {
      ...article,
      id: nextArticleId(articles),
      slug,
      name: slug,
    },
    articles.length,
  );

  return writeArticles([savedArticle, ...articles]);
};

export const updateArticle = (id, article) => {
  const articles = readArticles();
  const slug = makeUniqueSlug(articles, article.slug || article.title, id);
  const updatedArticles = articles.map((currentArticle, index) =>
    currentArticle.id === id
      ? normalizeArticle(
          {
            ...currentArticle,
            ...article,
            id,
            slug,
            name: slug,
          },
          index,
        )
      : currentArticle,
  );

  return writeArticles(updatedArticles);
};

export const toggleArticleStatus = (id) => {
  const articles = readArticles();
  const updatedArticles = articles.map((article) =>
    article.id === id
      ? {
          ...article,
          status: article.status === 'active' ? 'inactive' : 'active',
        }
      : article,
  );

  return writeArticles(updatedArticles);
};
