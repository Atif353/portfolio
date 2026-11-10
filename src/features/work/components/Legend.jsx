import { projectKinds } from "@/data/projects";
import { KindMarker } from "./KindMarker";
import styles from "./Legend.module.css";

export function Legend() {
  return (
    <ul className={styles.legend}>
      {projectKinds.map(({ kind, label }) => (
        <li key={kind} className={styles.item}>
          <KindMarker kind={kind} />
          {label}
        </li>
      ))}
    </ul>
  );
}
