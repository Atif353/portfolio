import styles from "./Accent.module.css";

export function Accent({ tight = false, children }) {
  return <span className={tight ? `${styles.accent} ${styles.tight}` : styles.accent}>{children}</span>;
}
