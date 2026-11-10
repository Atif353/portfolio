import { Button } from "@/shared/components/ui/Button";
import { ChipList } from "@/shared/components/ui/Chip";
import { StatusDot } from "@/shared/components/ui/StatusDot";
import { KindMarker } from "./KindMarker";
import styles from "./ProjectCard.module.css";

function stepState(index, active) {
  if (index === active) return "current";
  if (index < active) return "done";
  return "pending";
}

export function ProjectCard({ project, position, tick }) {
  const { flow } = project;
  const active = (tick + position * 2) % (flow.length + 1);
  const hasLive = Boolean(project.live);
  const hasRepo = Boolean(project.repo);
  const showActions = hasLive || hasRepo;
  const showPrivate = project.isPrivate && !showActions;

  return (
    <article className={styles.card}>
      <div className={styles.preview}>
        <div className={styles.previewHead}>
          <span>{project.area}</span>
          {hasLive ? (
            <span className={styles.live}>
              <StatusDot size={7} />
              <span>Live</span>
            </span>
          ) : null}
        </div>
        <div className={styles.metric}>
          <span className={styles.metricValue}>{project.metric.value}</span>
          <span className={styles.metricLabel}>{project.metric.label}</span>
        </div>
        <ol className={styles.flow}>
          {flow.map((step, index) => {
            const state = stepState(index, active);
            return (
              <li key={step} className={styles.flowItem}>
                <span className={`${styles.step} ${styles[state]}`}>{step}</span>
                {index < flow.length - 1 ? (
                  <span className={state === "done" ? `${styles.link} ${styles.linkDone}` : styles.link} />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.context}>
            <KindMarker kind={project.kind} />
            <span>
              {String(position + 2).padStart(2, "0")} · {project.context}
            </span>
          </span>
          <span className={styles.dates}>{project.dates}</span>
        </div>
        <div className={styles.titleGroup}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.tagline}>{project.tagline}</span>
        </div>
        <p className={styles.description}>{project.description}</p>
        <ChipList items={project.stack} className={styles.stack} />
        {showActions ? (
          <div className={styles.actions}>
            {hasLive ? (
              <Button size="xs" href={project.live} external arrow="↗">
                Visit live website
              </Button>
            ) : null}
            {hasRepo ? (
              <Button variant="outline" size="xs" href={project.repo} external arrow="↗">
                GitHub
              </Button>
            ) : null}
          </div>
        ) : null}
        {showPrivate ? <div className={styles.private}>Client platform · private codebase</div> : null}
      </div>
    </article>
  );
}
