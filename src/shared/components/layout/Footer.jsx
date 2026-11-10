import { profile, socialLinks } from "@/data/site";
import { Container } from "@/shared/components/ui/Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </span>
        <div className={styles.links}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
