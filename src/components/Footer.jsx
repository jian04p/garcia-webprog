import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.svg';
import articles from '../assets/article-content.js';

const Footer = () => {
  return (
    <footer className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#3b3025] bg-[#111214] p-6 text-[#f3ecdf] shadow-[0_24px_70px_rgba(0,0,0,0.28)] lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoMark}
                alt="FragPH mark"
                className="h-12 w-12 rounded-2xl border border-[#3b3025] bg-white/[0.04] p-1.5"
              />
              <div>
                <p className="brand-heading text-2xl font-semibold tracking-[-0.05em] text-[#f3ecdf]">
                  FragPH
                </p>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#b59663]">
                  Stay mabango!
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#d8cab7]">
              FragPH is a perfume blog that helps readers discover scents by vibe, notes, and
              everyday wear. The layout stays clean for class requirements, while the content feels
              more branded and more real.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b59663]">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link className="text-sm text-[#f3ecdf] transition hover:text-[#b59663]" to="/">
                Home
              </Link>
              <Link className="text-sm text-[#f3ecdf] transition hover:text-[#b59663]" to="/about">
                About FragPH
              </Link>
              <Link className="text-sm text-[#f3ecdf] transition hover:text-[#b59663]" to="/articles">
                Perfume Articles
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b59663]">
              Featured Bottles
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {articles.slice(0, 3).map((article) => (
                <Link
                  key={article.name}
                  className="text-sm text-[#f3ecdf] transition hover:text-[#b59663]"
                  to={`/articles/${article.name}`}
                >
                  {article.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#3b3025] pt-4 text-xs uppercase tracking-[0.26em] text-[#9e8d75]">
          FragPH perfume blog.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

