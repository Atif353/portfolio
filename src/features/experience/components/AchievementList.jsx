import { achievements } from "@/data/experience";
import styles from "./AchievementList.module.css";

export function AchievementList() {
  return (
    <div className={styles.list}>
      {achievements.map((item) => (
        <div key={item.title} className={styles.item}>
          <span className={styles.value}>{item.value}</span>
          <div className={styles.text}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.body}>{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
