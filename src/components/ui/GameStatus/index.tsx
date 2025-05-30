import { FC } from 'react';
import { Player } from '@/types';
import styles from './GameStatus.module.css';

interface GameStatusProps {
  currentPlayer: Player;
}

export const GameStatus: FC<GameStatusProps> = ({ currentPlayer }) => {
  const isHost = currentPlayer === Player.HOST;

  return (
    <div className={styles.statusBox}>
      <p className={styles.statusLabel}>Current Turn</p>
      <div className={styles.turnInfo}>
        <div className={isHost ? styles.turnHost : styles.turnOpponent}></div>
        <span className={isHost ? styles.hostText : styles.opponentText}>{isHost ? 'Red' : 'Black'}</span>
      </div>
    </div>
  );
};
