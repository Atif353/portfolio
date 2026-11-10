import styles from "./Eyebrow.module.css";

export function Eyebrow({ children }) {
  return <div className={styles.eyebrow}>{children}</div>;
}
