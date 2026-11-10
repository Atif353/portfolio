import { Accent } from "@/shared/components/ui/Accent";
import { Button } from "@/shared/components/ui/Button";
import { Container } from "@/shared/components/ui/Container";
import { PageHeader } from "@/shared/components/ui/PageHeader";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <Container className={styles.page}>
      <PageHeader eyebrow="404">
        This page <Accent>doesn't exist.</Accent>
      </PageHeader>
      <Button to="/" arrow="→">
        Back home
      </Button>
    </Container>
  );
}
