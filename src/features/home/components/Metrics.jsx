import { metrics } from "@/data/site";
import { Container } from "@/shared/components/ui/Container";
import styles from "./Metrics.module.css";

export function Metrics() {
  return (
    <Container as="section" className={styles.section}>
      <div className={styles.grid}>
        {metrics.map((metric) => (
          <div key={metric.label} className={styles.metric}>
            <span className={styles.value}>{metric.value}</span>
            <span className={styles.label}>{metric.label}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}
