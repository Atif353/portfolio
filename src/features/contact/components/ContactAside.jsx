import { contactRows } from "@/data/contact";
import { profile } from "@/data/site";
import { Button } from "@/shared/components/ui/Button";
import styles from "./ContactAside.module.css";

export function ContactAside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.identity}>
        <div className={styles.photo}>
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="380" height="475" />
        </div>
        <div className={styles.about}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.role}>{profile.shortRole}</span>
          <span className={styles.location}>
            {profile.location}
            <br />
            Remote-ready
          </span>
        </div>
      </div>
      <a href={`mailto:${profile.email}`} className={styles.email}>
        <span className={styles.emailLabel}>Or email directly</span>
        <span className={styles.emailAddress}>{profile.email} ↗</span>
      </a>
      <div className={styles.rows}>
        {contactRows.map((row) => (
          <a
            key={row.label}
            href={row.href}
            className={styles.row}
            {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className={styles.rowLabel}>{row.label}</span>
            <span className={styles.rowValue}>{row.value}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
      <Button variant="outline" size="md" href={profile.resume} download={profile.resumeFile} arrow="↓" className={styles.resume}>
        Download résumé (PDF)
      </Button>
    </aside>
  );
}
