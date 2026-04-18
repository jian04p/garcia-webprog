import { Link } from 'react-router-dom';

const inputClasses =
  'mt-2 w-full rounded-2xl border border-[#3b3025] bg-[#0f1316] px-4 py-3 text-sm text-[#f3ecdf] outline-none transition placeholder:text-[#6f6455] focus:border-[#b59663] focus:bg-[#12181c]';

const socialButtonClasses =
  'w-full rounded-2xl border border-[#3b3025] bg-white/[0.03] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8cab7] transition hover:border-[#b59663] hover:bg-white/[0.07] hover:text-[#f3ecdf]';

const SignInPage = () => {
  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
        Welcome Back
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf] sm:text-4xl">
        Sign in to FragPH
      </h1>
      <p className="mt-3 text-sm leading-7 text-[#c9baa9]">
        Continue where you left off and keep your perfume profile synced with the latest featured
        scent picks.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <button type="button" className={socialButtonClasses}>
            Google
          </button>
          <button type="button" className={socialButtonClasses}>
            Apple
          </button>
        </div>

        <div className="relative py-1">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[#3b3025]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#12171b] px-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8f7f68]">
              Or continue with email
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-[#d8cab7]">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="name@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-[#d8cab7]">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-[#c9baa9]">
            <input type="checkbox" className="h-4 w-4 rounded border-[#6b5f4f] accent-[#b59663]" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-[#d8cab7] transition hover:text-[#f3ecdf]">
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl border border-[#b59663] bg-[#b59663] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#111312] transition hover:-translate-y-0.5 hover:bg-[#c7a66e]"
        >
          Log In
        </button>
      </form>

      <div className="mt-8 border-t border-[#3b3025] pt-6 text-sm text-[#c9baa9]">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-[#f3ecdf] transition hover:text-[#b59663]">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
