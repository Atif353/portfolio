import { Accent } from "@/shared/components/ui/Accent";
import { Button } from "@/shared/components/ui/Button";
import styles from "./CtaBand.module.css";

export function CtaBand() {
  return (
    <section className={styles.section}>
      <div className={styles.band}>
        <h2 className={styles.title}>
          Have a system that needs to <Accent>just work?</Accent>
        </h2>
        <Button to="/contact" variant="light" size="xl" arrow="→">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
