import { principles } from "@/data/about";
import { Container } from "@/shared/components/ui/Container";
import styles from "./Principles.module.css";

export function Principles() {
  return (
    <Container as="section" className={styles.section}>
      <div className={styles.grid}>
        {principles.map((principle) => (
          <article key={principle.number} className={styles.card}>
            <span className={styles.number}>{principle.number}</span>
            <h3 className={styles.title}>{principle.title}</h3>
            <p className={styles.body}>{principle.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
