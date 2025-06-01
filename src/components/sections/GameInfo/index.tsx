import { GameStatus, PlayerScore } from '@/components/ui';
import styles from './GameInfo.module.css';
import { Player } from '@/types/players';

export const GameInfo = () => {
  return (
    <div className={`${styles.container}`}>
      <h2 className={styles.title}>Game Info</h2>
      <div className={styles.scoreBoard}>
        <PlayerScore player="host" score={0} />
        <div className={styles.vsText}>vs</div>
        <PlayerScore player="opponent" score={2} />
      </div>
      <GameStatus currentPlayer={Player.HOST} />
    </div>
  );
};
