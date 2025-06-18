import { FC, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import styles from './VictoryScreen.module.css';
import victorySound from '@/assets/victory.mp3';
import { Button } from '@/components/ui';
import { RefreshCw } from 'lucide-react';

interface VictoryScreenProps {
  playerName: string;
  onRestart: () => void;
}

export const VictoryScreen: FC<VictoryScreenProps> = ({ playerName, onRestart }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const audio = new Audio(victorySound);
    audio.volume = 0.5;
    audio.play().catch(e => console.warn('Autoplay blocked:', e));

    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} recycle={false} />
      <div className={styles.card}>
        <h1 className={styles.title}>🎉 Congratulations, {playerName}!</h1>
        <p className={styles.message}>You have won the game of Checkers!</p>

        <Button onClick={onRestart} icon={<RefreshCw size={18} />} text="New Game" variant="newGame" />
      </div>
    </>
  );
};
