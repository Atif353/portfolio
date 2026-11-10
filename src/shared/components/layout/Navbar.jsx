import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, profile } from "@/data/site";
import { Button } from "@/shared/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Navbar.module.css";

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className={open ? `${styles.nav} ${styles.open}` : styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label={`${profile.name} — home`}>
          <span className={styles.mark}>am</span>
          <span className={styles.name}>{profile.name}</span>
        </Link>
        <div id="site-menu" className={styles.links}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            variant="ink"
            size="md"
            href={profile.resume}
            download={profile.resumeFile}
            arrow="↓"
            className={styles.panelResume}
          >
            Download résumé
          </Button>
        </div>
        <div className={styles.actions}>
          <ThemeToggle />
          <Button
            variant="ink"
            size="nav"
            href={profile.resume}
            download={profile.resumeFile}
            arrow="↓"
            className={styles.resume}
          >
            Résumé
          </Button>
          <button
            type="button"
            className={styles.burger}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>
    </nav>
  );
}
