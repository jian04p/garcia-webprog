import { Link, Outlet } from 'react-router-dom';
import FragPHLogo from '../components/FragPHLogo';

const AuthLayout = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0c0f12] text-[#f3ecdf]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#b59663]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[320px] w-[320px] rounded-full bg-[#304236]/20 blur-3xl" />
      </div>

      <div className="relative grid min-h-screen w-full lg:grid-cols-[1.08fr_0.92fr]">
        <aside className="hidden border-r border-[#3b3025] bg-[#121417]/60 p-10 lg:flex lg:items-center lg:justify-center xl:p-14">
          <div className="w-full max-w-xl">
            <div className="rounded-[30px] border border-[#3b3025] bg-[#15181b]/90 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <FragPHLogo className="h-12 w-auto text-[#f3ecdf]" />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
                Stay mabango!
              </p>

              <h2 className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#f3ecdf]">
                Your fragrance profile starts here.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#c9baa9]">
                Sign in to continue your scent journey or create an account to save favorites, track
                your perfume notes, and explore new drops with a cleaner experience.
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-2xl border border-[#3b3025] bg-white/[0.03] px-4 py-3 text-sm text-[#d8cab7]">
                  Curated bottle picks and article collections
                </div>
                <div className="rounded-2xl border border-[#3b3025] bg-white/[0.03] px-4 py-3 text-sm text-[#d8cab7]">
                  Simple scent language for everyday wear
                </div>
                <div className="rounded-2xl border border-[#3b3025] bg-white/[0.03] px-4 py-3 text-sm text-[#d8cab7]">
                  Branded profile experience for FragPH readers
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex items-center px-5 py-8 sm:px-10 sm:py-10 lg:px-12">
          <div className="mx-auto w-full max-w-xl rounded-[34px] border border-[#3b3025] bg-[#12171b]/92 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#3b3025] pb-5">
              <FragPHLogo className="h-9 w-auto text-[#f3ecdf]" />
              <Link
                to="/"
                className="rounded-full border border-[#b59663]/40 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8cab7] transition hover:border-[#b59663] hover:text-[#f3ecdf]"
              >
                Back Home
              </Link>
            </div>

            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
