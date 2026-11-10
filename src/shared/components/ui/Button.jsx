import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const SIZES = {
  nav: [38, 16],
  xs: [44, 18],
  sm: [46, 20],
  md: [50, 24],
  lg: [54, 26],
  xl: [56, 28],
};

export function Button({
  variant = "accent",
  size = "lg",
  to,
  href,
  external = false,
  download,
  arrow,
  className = "",
  children,
  ...rest
}) {
  const [height, padding] = SIZES[size];
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();
  const style = { "--btn-h": `${height}px`, "--btn-x": `${padding}px` };
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <span aria-hidden="true">{arrow}</span> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} style={style} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} download={download} className={classes} style={style} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} style={style} {...rest}>
      {content}
    </button>
  );
}
