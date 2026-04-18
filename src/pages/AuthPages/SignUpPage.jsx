import { Link } from 'react-router-dom';

const inputClasses =
  'mt-2 w-full rounded-2xl border border-[#3b3025] bg-[#0f1316] px-4 py-3 text-sm text-[#f3ecdf] outline-none transition placeholder:text-[#6f6455] focus:border-[#b59663] focus:bg-[#12181c]';

const socialButtonClasses =
  'w-full rounded-2xl border border-[#3b3025] bg-white/[0.03] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8cab7] transition hover:border-[#b59663] hover:bg-white/[0.07] hover:text-[#f3ecdf]';

const SignUpPage = () => {
  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
        Create Account
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf] sm:text-4xl">
        Join FragPH Today
      </h1>
      <p className="mt-3 text-sm leading-7 text-[#c9baa9]">
        Set up your profile to save perfume favorites, track note preferences, and keep your scent
        reads in one place.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <button type="button" className={socialButtonClasses}>
            Sign up with Google
          </button>
          <button type="button" className={socialButtonClasses}>
            Sign up with Apple
          </button>
        </div>

        <div className="relative py-1">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[#3b3025]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#12171b] px-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8f7f68]">
              Or use your email
            </span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-[#d8cab7]">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-[#d8cab7]">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-[#d8cab7]">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="name@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-password" className="text-sm font-medium text-[#d8cab7]">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="signup-confirm-password" className="text-sm font-medium text-[#d8cab7]">
              Confirm Password
            </label>
            <input
              id="signup-confirm-password"
              type="password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              className={inputClasses}
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-xs leading-6 text-[#c9baa9]">
          <input type="checkbox" className="h-4 w-4 rounded border-[#6b5f4f] accent-[#b59663]" />
          I agree to the terms and privacy policy.
        </label>

        <button
          type="submit"
          className="w-full rounded-2xl border border-[#b59663] bg-[#b59663] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#111312] transition hover:-translate-y-0.5 hover:bg-[#c7a66e]"
        >
          Create Account
        </button>

        <div className="rounded-2xl border border-[#3b3025] bg-white/[0.03] px-4 py-3 text-xs leading-6 text-[#a79784]">
          Tip: choose a strong password with at least 8 characters, numbers, and symbols.
        </div>
      </form>

      <div className="mt-8 border-t border-[#3b3025] pt-6 text-sm text-[#c9baa9]">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-[#f3ecdf] transition hover:text-[#b59663]">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
