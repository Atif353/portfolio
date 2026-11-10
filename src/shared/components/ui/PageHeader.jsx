import { Eyebrow } from "./Eyebrow";
import styles from "./PageHeader.module.css";

export function PageHeader({ eyebrow, maxWidth = 900, lead, aside, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.text} style={{ maxWidth }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className={styles.title}>{children}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
      {aside}
    </header>
  );
}
