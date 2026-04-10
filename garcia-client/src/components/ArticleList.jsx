import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="rounded-[30px] border border-[#3b3025] bg-[#17191c]/92 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
        >
          <div className="flex aspect-[4/3] items-center justify-center rounded-[24px] border border-[#3b3025] bg-white p-5">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b59663]">
            {article.brand} / {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[#f3ecdf]">{article.title}</h3>
          <p className="mt-2 text-sm font-medium text-[#d8cab7]">{article.vibe}</p>
          <p className="mt-3 text-sm leading-6 text-[#c4b6a6]">{article.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b59663]">
            <span className="rounded-full border border-[#3b3025] bg-white/[0.04] px-3 py-1">
              {article.family}
            </span>
          </div>
          <Button to={`/articles/${article.name}`} className="mt-5">
            Read More
          </Button>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;

