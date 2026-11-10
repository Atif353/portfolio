import styles from "./SprintBoard.module.css";

export function SprintBoard({ columns, tick }) {
  const total = columns.reduce((sum, column) => sum + column.cards.length, 0);
  const hot = tick % total;
  let index = 0;

  return (
    <div className={styles.board}>
      {columns.map((column) => (
        <div key={column.name} className={styles.column}>
          <div className={styles.columnHead}>
            <span>{column.name}</span>
            <span>{column.cards.length}</span>
          </div>
          {column.cards.map((card) => {
            const active = index++ === hot;
            return (
              <div key={card.id} className={active ? `${styles.card} ${styles.active}` : styles.card}>
                <span className={styles.cardTitle}>{card.title}</span>
                <div className={styles.cardMeta}>
                  <span>{card.id}</span>
                  <span className={`${styles.status} ${styles[column.status]}`} />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
