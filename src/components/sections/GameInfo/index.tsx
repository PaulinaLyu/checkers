import { GameStatus, PlayerScore } from '@/components/ui';
import styles from './GameInfo.module.css';
import { useGame } from '@/context/GameContext';

export const GameInfo = () => {
  const { state } = useGame();
  const { currentPlayer, opponentScore, hostScore } = state;
  return (
    <div className={`${styles.container}`}>
      <h2 className={styles.title}>Game Info</h2>
      <div className={styles.scoreBoard}>
        <PlayerScore player="host" score={hostScore} />
        <div className={styles.vsText}>vs</div>
        <PlayerScore player="opponent" score={opponentScore} />
      </div>
      <GameStatus currentPlayer={currentPlayer} />
    </div>
  );
};
