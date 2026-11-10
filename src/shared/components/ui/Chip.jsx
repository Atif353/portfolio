import styles from "./Chip.module.css";

export function Chip({ tone = "default", children }) {
  return <span className={`${styles.chip} ${styles[tone]}`}>{children}</span>;
}

export function ChipList({ items, tone = "default", className = "" }) {
  return (
    <div className={`${styles.list} ${className}`.trim()}>
      {items.map((item) => (
        <Chip key={item} tone={tone}>
          {item}
        </Chip>
      ))}
    </div>
  );
}
