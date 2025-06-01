import { RotateCcw, RefreshCw, Eye, EyeOff } from 'lucide-react';
import styles from './GameControls.module.css';
import { useState } from 'react';

const canUndo = true;

export const GameControls = () => {
  const [showHints, setShowHints] = useState(true);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Controls</h2>

      <div className={styles.buttonGroup}>
        <button onClick={() => console.log('Reset')} className={styles.newGameBtn}>
          <RefreshCw size={18} />
          New Game
        </button>

        <button
          onClick={() => console.log('Undo')}
          disabled={!canUndo}
          className={`${styles.undoBtn} ${!canUndo ? styles.undoBtnDisabled : ''}`}>
          <RotateCcw size={18} />
          Undo Move
        </button>

        <button
          onClick={() => {
            setShowHints(prev => !prev);
          }}
          className={styles.hintBtn}>
          {showHints ? (
            <>
              <EyeOff size={18} />
              Hide Hints
            </>
          ) : (
            <>
              <Eye size={18} />
              Show Hints
            </>
          )}
        </button>
      </div>
    </div>
  );
};
