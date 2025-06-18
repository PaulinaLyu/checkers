import { Board, GameControls, GameInfo, VictoryScreen } from '@/components/sections';
import styles from './GamePage.module.css';
import { useGame } from '@/context/GameContext';

export const GamePage = () => {
  const { state, resetGame } = useGame();
  const { winner } = state;

  const handleRestart = () => resetGame();

  if (winner) {
    return <VictoryScreen playerName={winner === 'HOST' ? 'RED' : 'BLACK'} onRestart={handleRestart} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Modern Checkers</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.board}>
          <Board />
        </div>
        <div className={styles.info}>
          <GameInfo />
          <GameControls />
        </div>
      </div>
    </div>
  );
};
