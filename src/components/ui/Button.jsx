import { ArrowUpRight } from "lucide-react";

export function Button({ href, children, variant = "primary", download, onClick, type = "button" }) {
  const classes = `focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-sm font-semibold transition duration-300 sm:px-5 ${
    variant === "primary"
      ? "bg-[var(--text)] text-[var(--bg)] hover:scale-[1.03]"
      : "border hairline bg-[var(--panel)] hover:border-[var(--accent)]"
  }`;
  const content = <>{children}<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>;
  return href ? <a className={classes} href={href} download={download}>{content}</a> : <button className={classes} onClick={onClick} type={type}>{content}</button>;
}
