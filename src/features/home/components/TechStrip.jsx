import { stackPrimary, stackSecondary } from "@/data/site";
import { Marquee } from "./Marquee";
import styles from "./TechStrip.module.css";

export function TechStrip() {
  return (
    <section className={styles.strip} aria-label="Tech stack">
      <Marquee items={stackPrimary} direction="left" size="large" />
      <Marquee items={stackSecondary} direction="right" size="small" />
    </section>
  );
}
