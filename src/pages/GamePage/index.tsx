import styles from './GamePage.module.css';

export const GamePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Modern Checkers</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.board}>Board</div>
        <div className={styles.info}>Game Info</div>
      </div>
    </div>
  );
};
