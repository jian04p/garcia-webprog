import Button from '../../components/Button';
import ArticleList from '../../components/ArticleList';
import articles from '../../assets/article-content.js';

const ArticleListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y border-[#3b3025] bg-[#15171a]/88 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
          Articles
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-[#f3ecdf] sm:text-4xl">
          Perfume picks that are easy to compare, fun to read, and beginner-friendly.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c4b6a6] sm:text-base">
          This featured list introduces five designer fragrances for FragPH. Each card highlights
          the bottle, overall vibe, and where the scent fits best so the page still feels simple
          while the content becomes more specific and more branded.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/">Back Home</Button>
          <Button to="/about" variant="primary">
            About FragPH
          </Button>
        </div>
      </section>

      <section className="border-y border-[#3b3025] bg-[#111214]/82 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
            Featured Bottles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#f3ecdf]">FragPH article list</h2>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;

