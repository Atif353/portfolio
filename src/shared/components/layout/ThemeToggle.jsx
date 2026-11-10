import { useTheme } from "@/shared/context/ThemeContext";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      aria-pressed={isDark}
    >
      <span className={styles.label}>{isDark ? "Dark" : "Light"}</span>
      <span className={styles.track}>
        <span className={isDark ? `${styles.knob} ${styles.dark}` : styles.knob} />
      </span>
    </button>
  );
}
