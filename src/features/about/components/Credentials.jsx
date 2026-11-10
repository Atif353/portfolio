import { certifications, education } from "@/data/about";
import { Container } from "@/shared/components/ui/Container";
import { Eyebrow } from "@/shared/components/ui/Eyebrow";
import styles from "./Credentials.module.css";

export function Credentials() {
  return (
    <Container as="section" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <Eyebrow>Education</Eyebrow>
          <div className={styles.degree}>
            <span className={styles.degreeTitle}>{education.degree.title}</span>
            <div className={styles.degreeMeta}>
              <span>{education.degree.school}</span>
              <span className={styles.grade}>{education.degree.grade}</span>
            </div>
          </div>
          <div className={styles.earlier}>
            {education.earlier.map((entry) => (
              <div key={entry.title} className={styles.earlierRow}>
                <span>{entry.title}</span>
                <span className={styles.school}>{entry.school}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <Eyebrow>Certifications · {certifications.issuer}</Eyebrow>
          <div className={styles.certs}>
            {certifications.items.map((name) => (
              <div key={name} className={styles.cert}>
                <span className={styles.certName}>{name}</span>
                <span className={styles.issuer}>{certifications.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
