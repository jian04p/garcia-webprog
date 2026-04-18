import { Link } from 'react-router-dom';
import FragPHLogo from './FragPHLogo';
import articles from '../assets/article-content.js';

const Footer = () => {
  return (
    <footer className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#3b3025] bg-[#111214] p-6 text-[#f3ecdf] shadow-[0_24px_70px_rgba(0,0,0,0.28)] lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-[#3b3025] bg-white/[0.02] px-3 py-2">
                <FragPHLogo className="h-9 w-auto text-[#f3ecdf]" />
              </div>
              <div>
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
              <Link className="text-sm text-[#f3ecdf] transition hover:text-[#b59663]" to="/auth/signin">
                Sign In
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

