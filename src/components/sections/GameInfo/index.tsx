import styles from './GameInfo.module.css';

export const GameInfo = () => {
  return (
    <div className={`${styles.container}`}>
      <h2 className={styles.title}>Game Info</h2>
      <div className={styles.scoreBoard}>
        Red
        <div className={styles.vsText}>vs</div>
        Black
      </div>
      Status
    </div>
  );
};
