import { skills } from "@/data/about";
import { Container } from "@/shared/components/ui/Container";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className={styles.band}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow="Technical skills"
          spacing="md"
          action={
            <span className={styles.legend}>
              <span className={`${styles.dot} ${styles.legendDot}`} />
              Daily in production
            </span>
          }
        >
          The toolkit.
        </SectionHeading>
        <div className={styles.list}>
          {skills.map((group) => (
            <div key={group.number} className={styles.row}>
              <div className={styles.name}>
                <span className={styles.number}>{group.number}</span>
                <span className={styles.category}>{group.category}</span>
              </div>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <span key={item.name} className={styles.skill}>
                    {item.core ? <span className={styles.dot} /> : null}
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
