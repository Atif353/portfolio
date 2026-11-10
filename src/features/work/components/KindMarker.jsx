import styles from "./KindMarker.module.css";

export function KindMarker({ kind }) {
  return <span className={`${styles.marker} ${styles[kind]}`} aria-hidden="true" />;
}
