import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { getPublicArticleBySlug } from '../../services/ArticleService';

function ArticlePage() {
  const { name } = useParams();
  const article = getPublicArticleBySlug(name);

  if (!article) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-[34px] border border-[#3b3025] bg-[#15171a]/92 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] lg:p-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-[#f3ecdf]">Perfume article not found</h1>
            <p className="mt-3 text-base leading-7 text-[#c4b6a6]">
              That scent trail does not exist right now. Head back to the article list and pick one
              of the featured bottles instead.
            </p>
            <Button to="/articles" className="mt-6">
              Back to Articles
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
      <section className="rounded-[34px] border border-[#3b3025] bg-[#15171a]/92 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] lg:p-8">
        <div className="max-w-4xl">
          <div className="mb-4">
            <Button to="/articles">Back to Articles</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
            {article.brand}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#f3ecdf] sm:text-5xl">
            {article.title} review
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#c4b6a6] sm:text-lg">
            {article.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b59663]">
            <span className="rounded-full border border-[#3b3025] bg-white/[0.04] px-4 py-2">
              {article.family}
            </span>
            <span className="rounded-full border border-[#3b3025] bg-white/[0.04] px-4 py-2">
              {article.vibe}
            </span>
            <span className="rounded-full border border-[#3b3025] bg-white/[0.04] px-4 py-2">
              {article.bestFor}
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[34px] border border-[#3b3025] bg-[#15171a]/88 p-6 lg:p-8">
          <div className="flex aspect-[4/5] items-center justify-center rounded-[28px] border border-[#3b3025] bg-white p-6">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-[#3b3025] bg-white/[0.03] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
                Family
              </p>
              <p className="mt-2 text-sm font-semibold text-[#f3ecdf]">{article.family}</p>
            </div>
            <div className="rounded-[24px] border border-[#3b3025] bg-white/[0.03] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
                Vibe
              </p>
              <p className="mt-2 text-sm font-semibold text-[#f3ecdf]">{article.vibe}</p>
            </div>
            <div className="rounded-[24px] border border-[#3b3025] bg-white/[0.03] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
                Best For
              </p>
              <p className="mt-2 text-sm font-semibold text-[#f3ecdf]">{article.bestFor}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[34px] border border-[#3b3025] bg-[linear-gradient(180deg,#181311_0%,#101214_100%)] p-6 text-[#f3ecdf] lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
            Scent Story
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf]">
            What this perfume feels like on skin
          </h2>

          <div className="mt-6 space-y-4">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-[#d8cab7]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[34px] border border-[#3b3025] bg-[#121417]/88 p-6 lg:p-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
            Note Breakdown
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf]">
            Top, heart, and base notes
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(article.notes).map(([layer, items]) => (
            <article
              key={layer}
              className="rounded-[28px] border border-[#3b3025] bg-white/[0.03] p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
                {layer}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#3b3025] bg-white/[0.04] px-3 py-1 text-xs font-semibold text-[#f3ecdf]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-[#3b3025] pt-6">
          <Button to="/articles">Back to Articles</Button>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;


