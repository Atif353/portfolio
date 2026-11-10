import { projects } from "@/data/projects";
import { useTick } from "@/shared/hooks/useTick";
import { Accent } from "@/shared/components/ui/Accent";
import { Container } from "@/shared/components/ui/Container";
import { PageHeader } from "@/shared/components/ui/PageHeader";
import { Flagship } from "@/features/work/components/Flagship";
import { Legend } from "@/features/work/components/Legend";
import { ProjectCard } from "@/features/work/components/ProjectCard";
import styles from "./Work.module.css";

export function Work() {
  const tick = useTick();

  return (
    <Container className={styles.page}>
      <PageHeader eyebrow={`Work — ${String(projects.length + 1).padStart(2, "0")} projects`} maxWidth={820} aside={<Legend />}>
        Complex systems, <Accent>built to hold up.</Accent>
      </PageHeader>
      <Flagship tick={tick} />
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} position={index} tick={tick} />
        ))}
      </div>
    </Container>
  );
}
