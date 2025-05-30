import React from 'react';
import styles from './PlayerScore.module.css';

interface PlayerScoreProps {
  player: 'host' | 'opponent';
  score: number;
}

export const PlayerScore: React.FC<PlayerScoreProps> = ({ player, score }) => {
  const iconClass = player === 'host' ? styles.hostIcon : styles.opponentIcon;
  const scoreClass = player === 'host' ? styles.hostScore : styles.opponentScore;

  return (
    <div className={styles.player}>
      <div className={`${styles.icon} ${iconClass}`}></div>
      <div className={`${styles.score} ${scoreClass}`}>{score}</div>
    </div>
  );
};
