import { Eyebrow } from "./Eyebrow";
import styles from "./SectionHeading.module.css";

export function SectionHeading({ eyebrow, spacing = "lg", action, children }) {
  return (
    <header className={`${styles.heading} ${styles[spacing]}`}>
      <div className={styles.text}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={styles.title}>{children}</h2>
      </div>
      {action}
    </header>
  );
}
