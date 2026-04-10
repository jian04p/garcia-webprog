import { Link } from 'react-router-dom';

const variantClasses = {
  primary:
    'border-[#b59663] bg-[#b59663] text-[#111312] shadow-[0_14px_30px_rgba(181,150,99,0.18)] hover:-translate-y-0.5 hover:bg-[#c7a66e]',
  secondary:
    'border-[#b59663]/45 bg-white/[0.03] text-[#f3ecdf] hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-[#b59663]',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b59663]/25',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
