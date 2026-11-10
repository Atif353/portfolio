import { contactIntro } from "@/data/contact";
import { Accent } from "@/shared/components/ui/Accent";
import { Container } from "@/shared/components/ui/Container";
import { PageHeader } from "@/shared/components/ui/PageHeader";
import { ContactAside } from "@/features/contact/components/ContactAside";
import { ContactForm } from "@/features/contact/components/ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Container className={styles.page}>
      <PageHeader eyebrow="Contact" lead={contactIntro}>
        Let's build something <Accent>reliable.</Accent>
      </PageHeader>
      <div className={styles.grid}>
        <ContactForm />
        <ContactAside />
      </div>
    </Container>
  );
}
