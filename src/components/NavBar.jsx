import { NavLink } from 'react-router-dom';
import FragPHLogo from './FragPHLogo';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition',
    isActive
      ? 'border-[#b59663] bg-[#b59663] text-[#111312] shadow-[0_10px_25px_rgba(181,150,99,0.16)]'
      : 'border-[#b59663]/30 bg-white/[0.03] text-[#d8cab7] hover:border-[#b59663] hover:bg-white/[0.08]',
  ].join(' ');

const authLinkClassName = ({ isActive }) =>
  [
    'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition',
    isActive
      ? 'border-[#f3ecdf] bg-[#f3ecdf] text-[#111312] shadow-[0_12px_30px_rgba(243,236,223,0.16)]'
      : 'border-[#f3ecdf]/35 bg-white/[0.03] text-[#f3ecdf] hover:border-[#f3ecdf] hover:bg-white/[0.08]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[30px] border border-[#3b3025] bg-[#121417]/88 px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="rounded-2xl border border-[#3b3025] bg-[#17191c] px-3 py-2">
                <FragPHLogo className="h-9 w-auto text-[#f3ecdf]" />
              </div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
                Stay mabango!
              </p>
            </NavLink>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <nav className="flex flex-wrap items-center gap-2">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={navLinkClassName}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="flex flex-wrap items-center gap-2">
                <NavLink to="/auth/signin" className={authLinkClassName}>
                  Sign In
                </NavLink>
                <NavLink to="/auth/signup" className={navLinkClassName}>
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
