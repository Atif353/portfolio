import styles from "./Marquee.module.css";

export function Marquee({ items, direction = "left", size = "large" }) {
  const loop = [...items, ...items];

  return (
    <div className={styles.mask}>
      <div className={`${styles.track} ${styles[direction]} ${styles[size]}`}>
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item} aria-hidden={index >= items.length}>
            <span className={styles.label}>{item}</span>
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  );
}
