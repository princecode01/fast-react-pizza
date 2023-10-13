import { Link } from "react-router-dom";

function Button({ children, disabled, to, size, onClick,type }) {
  const base =
    "inline-block duration-1000 text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400";

  const styles = {
    primary: base + " px-3 py-2 md:px-6 md:py-4",
    small: base + " px-2 py-1 md:px-4 md:py-2 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm text-stone-400 hover:text-stone-800 focus:text-stone-800 px-3 py-2 md:px-6 md:py-4 border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400",
  };

  if (to)
    return (
      <Link to={to} className={styles[size]}>
        {children}
      </Link>
    );
  return (
    <button type={type} className={styles[size]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
