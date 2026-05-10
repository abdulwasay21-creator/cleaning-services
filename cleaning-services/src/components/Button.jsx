function Button({
  children,
  href = '#cta',
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
}) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold tracking-[0.08em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300/70 focus:ring-offset-2 focus:ring-offset-white';

  const variants = {
    primary:
      'p-7 text-white bg-sky-600 border-none',
    secondary:
      'border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700',
    ghost: 'text-sky-700 hover:text-slate-950',
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${className}`.trim()}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
