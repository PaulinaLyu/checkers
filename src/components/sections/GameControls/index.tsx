import { RotateCcw, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui';
import styles from './GameControls.module.css';

export const GameControls = () => {
  const { state, resetGame, undoMove, toggleHints } = useGame();
  const canUndo = state.history.length > 0;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Controls</h2>

      <div className={styles.buttonGroup}>
        <Button
          onClick={() => resetGame()}
          icon={<RefreshCw size={18} />}
          text="New Game"
          variant="newGame"
        />
        <Button
          onClick={() => undoMove()}
          icon={<RotateCcw size={18} />}
          text="Undo Move"
          variant="undo"
          disabled={!canUndo}
        />
        <Button
          onClick={() => toggleHints()}
          icon={state.showHints ? <EyeOff size={18} /> : <Eye size={18} />}
          text={state.showHints ? 'Hide Hints' : 'Show Hints'}
          variant="hint"
        />
      </div>
    </div>
  );
};
