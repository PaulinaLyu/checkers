import { FC } from 'react';
import { Player } from '@/types';
import styles from './GameStatus.module.css';

interface GameStatusProps {
  currentPlayer: Player;
}

export const GameStatus: FC<GameStatusProps> = ({ currentPlayer }) => {
  const isHost = currentPlayer === Player.HOST;
  const turnIconClass = isHost ? styles.turnHost : styles.turnOpponent;
  const turnTextClass = isHost ? styles.hostText : styles.opponentText;

  return (
    <div className={styles.statusBox}>
      <p className={styles.statusLabel}>Current Turn</p>
      <div className={styles.turnInfo}>
        <div className={`${styles.turnIcon} ${turnIconClass}`}></div>
        <span className={`${turnTextClass}`}>{isHost ? 'Red' : 'Black'}</span>
      </div>
    </div>
  );
};
