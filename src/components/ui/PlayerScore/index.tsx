import React, { useEffect, useRef } from 'react';
import styles from './PlayerScore.module.css';

interface PlayerScoreProps {
  player: 'host' | 'opponent';
  score: number;
}

export const PlayerScore: React.FC<PlayerScoreProps> = ({ player, score }) => {
  const isHost = player === 'host';
  const iconClass = isHost ? styles.hostIcon : styles.opponentIcon;
  const scoreClass = isHost ? styles.hostScore : styles.opponentScore;

  const scoreRef = useRef<HTMLDivElement>(null);
  const previousScore = useRef(score);

  useEffect(() => {
    if (previousScore.current !== score && scoreRef.current) {
      const el = scoreRef.current;

      el.classList.remove('score-update');

      void el.offsetWidth;
      el.classList.add('score-update');

      previousScore.current = score;
    }
  }, [score]);

  return (
    <div className={styles.player}>
      <div className={`${styles.icon} ${iconClass}`}></div>
      <div ref={scoreRef} className={`${styles.score} ${scoreClass}`}>
        {score}
      </div>
    </div>
  );
};
