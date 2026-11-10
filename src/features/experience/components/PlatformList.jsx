import { platforms } from "@/data/experience";
import { Eyebrow } from "@/shared/components/ui/Eyebrow";
import styles from "./PlatformList.module.css";

export function PlatformList() {
  return (
    <section className={styles.section}>
      <Eyebrow>Platforms delivered at Prisma</Eyebrow>
      <div className={styles.list}>
        {platforms.map((platform) => (
          <div key={platform.name} className={styles.row}>
            <span className={styles.name}>{platform.name}</span>
            <span className={styles.body}>{platform.description}</span>
            <span className={styles.period}>{platform.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
