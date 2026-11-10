import { employer } from "@/data/experience";
import { ChipList } from "@/shared/components/ui/Chip";
import styles from "./EmployerCard.module.css";

export function EmployerCard() {
  return (
    <aside className={styles.card}>
      <div className={styles.meta}>
        <span>{employer.period}</span>
        <span>{employer.mode}</span>
      </div>
      <div className={styles.title}>
        <span className={styles.company}>{employer.company}</span>
        <span className={styles.role}>{employer.role}</span>
      </div>
      <p className={styles.summary}>{employer.summary}</p>
      <ChipList items={employer.stack} tone="onDark" />
    </aside>
  );
}
