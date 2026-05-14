import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../services/UserService';

const inputClasses =
  'mt-2 w-full rounded-2xl border border-[#3b3025] bg-[#0f1316] px-4 py-3 text-sm text-[#f3ecdf] outline-none transition placeholder:text-[#6f6455] focus:border-[#b59663] focus:bg-[#12181c]';

const socialButtonClasses =
  'w-full rounded-2xl border border-[#3b3025] bg-white/[0.03] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8cab7] transition hover:border-[#b59663] hover:bg-white/[0.07] hover:text-[#f3ecdf]';

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: 'male',
  contactNumber: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  address: '',
  agreed: false,
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(blankForm);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!form.agreed) {
      setError('Please agree to the terms and privacy policy.');
      return;
    }

    if (!/^\d{11}$/.test(form.contactNumber.trim())) {
      setError('Contact number must be exactly 11 digits.');
      return;
    }

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    try {
      setLoading(true);
      await createUser({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        age: form.age.trim(),
        gender: form.gender.trim().toLowerCase(),
        contactNumber: form.contactNumber.trim(),
        email: form.email.trim().toLowerCase(),
        username: form.username.trim().toLowerCase(),
        password: form.password,
        address: form.address.trim(),
        role: 'editor',
        isActive: true,
      });

      navigate('/auth/signin', {
        state: {
          registeredEmail: form.email.trim().toLowerCase(),
          successMessage: 'Account created successfully. You can sign in now.',
        },
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to create your account right now.');
    } finally {
      setLoading(false);
    }
  };

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

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
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
              name="firstName"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              value={form.firstName}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-[#d8cab7]">
              Last Name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              value={form.lastName}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-age" className="text-sm font-medium text-[#d8cab7]">
              Age
            </label>
            <input
              id="signup-age"
              name="age"
              type="text"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="signup-gender" className="text-sm font-medium text-[#d8cab7]">
              Gender
            </label>
            <select
              id="signup-gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-contact-number" className="text-sm font-medium text-[#d8cab7]">
              Contact Number
            </label>
            <input
              id="signup-contact-number"
              name="contactNumber"
              type="text"
              placeholder="09123456789"
              value={form.contactNumber}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="signup-username" className="text-sm font-medium text-[#d8cab7]">
              Username
            </label>
            <input
              id="signup-username"
              name="username"
              type="text"
              placeholder="Choose a username"
              value={form.username}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-[#d8cab7]">
            Email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            placeholder="name@email.com"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-address" className="text-sm font-medium text-[#d8cab7]">
            Address
          </label>
          <input
            id="signup-address"
            name="address"
            type="text"
            placeholder="City, Province"
            value={form.address}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-password" className="text-sm font-medium text-[#d8cab7]">
              Password
            </label>
            <input
              id="signup-password"
              name="password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="signup-confirm-password" className="text-sm font-medium text-[#d8cab7]">
              Confirm Password
            </label>
            <input
              id="signup-confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              value={form.confirmPassword}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div className="rounded-2xl border border-[#3b3025] bg-white/[0.03] px-4 py-3 text-xs leading-6 text-[#a79784]">
          New signups create an <span className="font-semibold text-[#f3ecdf]">editor</span> account
          by default.
        </div>

        {error ? (
          <div className="rounded-2xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        ) : null}

        <label className="flex items-center gap-2 text-xs leading-6 text-[#c9baa9]">
          <input
            name="agreed"
            type="checkbox"
            checked={form.agreed}
            onChange={handleChange}
            className="h-4 w-4 rounded border-[#6b5f4f] accent-[#b59663]"
          />
          I agree to the terms and privacy policy.
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl border border-[#b59663] bg-[#b59663] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#111312] transition hover:-translate-y-0.5 hover:bg-[#c7a66e]"
        >
          {loading ? 'Creating Account...' : 'Create Account'}
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
