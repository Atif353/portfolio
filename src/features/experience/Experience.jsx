import { Accent } from "@/shared/components/ui/Accent";
import { Container } from "@/shared/components/ui/Container";
import { PageHeader } from "@/shared/components/ui/PageHeader";
import { AchievementList } from "./components/AchievementList";
import { EmployerCard } from "./components/EmployerCard";
import { PlatformList } from "./components/PlatformList";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Container className={styles.page}>
      <PageHeader eyebrow="Experience">
        Two years <Accent>in production.</Accent>
      </PageHeader>
      <div className={styles.layout}>
        <EmployerCard />
        <AchievementList />
      </div>
      <PlatformList />
    </Container>
  );
}
