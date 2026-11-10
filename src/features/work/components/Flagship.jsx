import { teamflow } from "@/data/projects";
import { Button } from "@/shared/components/ui/Button";
import { ChipList } from "@/shared/components/ui/Chip";
import { KindMarker } from "./KindMarker";
import { SprintBoard } from "./SprintBoard";
import styles from "./Flagship.module.css";

export function Flagship({ tick }) {
  return (
    <article className={styles.card}>
      <div className={styles.preview}>
        <div className={styles.previewHead}>
          <span className={styles.badge}>Flagship build</span>
          <span className={styles.previewLabel}>Sprint board</span>
        </div>
        <SprintBoard columns={teamflow.board} tick={tick} />
      </div>
      <div className={styles.body}>
        <div className={styles.context}>
          <KindMarker kind="personal" />
          <span>
            {teamflow.number} · {teamflow.context}
          </span>
        </div>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{teamflow.title}</h2>
          <span className={styles.tagline}>{teamflow.tagline}</span>
        </div>
        <p className={styles.description}>{teamflow.description}</p>
        <div className={styles.features}>
          {teamflow.features.map((feature) => (
            <div key={feature.title} className={styles.feature}>
              <span className={styles.featureTitle}>{feature.title}</span>
              <span className={styles.featureText}>{feature.description}</span>
            </div>
          ))}
        </div>
        <ChipList items={teamflow.stack} />
        <div className={styles.actions}>
          <Button variant="ink" size="sm" href={teamflow.repo} external arrow="↗">
            View on GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}
