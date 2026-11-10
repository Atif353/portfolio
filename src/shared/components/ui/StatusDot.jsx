import styles from "./StatusDot.module.css";

export function StatusDot({ size = 8 }) {
  return <span className={styles.dot} style={{ width: size, height: size }} aria-hidden="true" />;
}
