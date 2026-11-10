import styles from "./Container.module.css";

export function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`${styles.container} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
