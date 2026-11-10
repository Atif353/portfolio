import { services } from "@/data/site";
import { Accent } from "@/shared/components/ui/Accent";
import { Container } from "@/shared/components/ui/Container";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Container as="section" className={styles.section}>
      <SectionHeading eyebrow="What I do">
        Backend at the core, <Accent>product-minded</Accent> across the stack.
      </SectionHeading>
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.number} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.number}>{service.number}</span>
              <span className={styles.tag}>{service.tag}</span>
            </div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
