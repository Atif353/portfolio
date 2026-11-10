import { Link } from "react-router-dom";
import { workIndex } from "@/data/projects";
import { Container } from "@/shared/components/ui/Container";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import styles from "./WorkIndex.module.css";

export function WorkIndex() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow="Selected work"
          spacing="sm"
          action={
            <Link to="/work" className={styles.all}>
              <span>All projects</span>
              <span aria-hidden="true">→</span>
            </Link>
          }
        >
          A few things I've built.
        </SectionHeading>
        <div className={styles.list}>
          {workIndex.map((item) => (
            <Link key={item.number} to="/work" className={styles.row}>
              <span className={styles.heading}>
                <span className={styles.number}>{item.number}</span>
                <span className={styles.title}>{item.title}</span>
              </span>
              <span className={styles.tagline}>{item.tagline}</span>
              <span className={styles.context}>
                <span>{item.context}</span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
