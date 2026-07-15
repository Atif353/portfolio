import { ArrowUpRight } from "lucide-react";

export function Button({ href, children, variant = "primary", download, onClick, type = "button", target, rel }) {
  const classes = `focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-sm font-semibold transition duration-300 sm:px-5 ${
    variant === "primary"
      ? "bg-[var(--text)] text-[var(--bg)] shadow-[0_14px_35px_rgba(0,0,0,.18)] hover:-translate-y-0.5"
      : "border hairline bg-[var(--panel)] text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--accent)]"
  }`;
  const content = <>{children}<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>;
  return href ? <a className={classes} href={href} download={download} target={target} rel={rel}>{content}</a> : <button className={classes} onClick={onClick} type={type}>{content}</button>;
}
