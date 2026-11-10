import { bio } from "@/data/about";
import { Accent } from "@/shared/components/ui/Accent";
import { Container } from "@/shared/components/ui/Container";
import { Eyebrow } from "@/shared/components/ui/Eyebrow";
import styles from "./AboutIntro.module.css";

export function AboutIntro() {
  return (
    <Container as="section" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.heading}>
          <Eyebrow>About</Eyebrow>
          <h1 className={styles.title}>
            I care about the parts of software <Accent>nobody sees</Accent> — until they break.
          </h1>
        </div>
        <div className={styles.bio}>
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Container>
  );
}
