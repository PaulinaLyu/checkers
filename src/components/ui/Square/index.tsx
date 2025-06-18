import { FC, useMemo } from 'react';
import { useGame } from '@/context/GameContext';
import { getAvailableCaptures } from '@/utils/getAvailableCaptures';
import { getAvailableMoves } from '@/utils/getAvailableMoves';
import { Checker } from '../Checker';
import styles from '../Square/Square.module.css';

interface SquareProps {
  x: number;
  y: number;
}

export const Square: FC<SquareProps> = ({ x, y }) => {
  const { state, selectChecker, moveChecker } = useGame();
  const { board, showHints, currentPlayer } = state;
  const checker = board[y][x];
  const selected = state.selected;
  const isSelected = !!selected && selected[0] === y && selected[1] === x;
  const isHost = (x + y) % 2 === 0;

  const availableTargets = useMemo(() => {
    if (!selected) return [];
    const [sy, sx] = selected;
    const captures = getAvailableCaptures(board, sy, sx);
    if (captures.length > 0) return captures;
    return getAvailableMoves(board, sy, sx);
  }, [board, state.selected]);

  const isValidMove = availableTargets.some(([ty, tx]) => ty === y && tx === x);

  const isHighlightQueenPath = useMemo(() => {
    if (!selected) return false;
    const [sy, sx] = selected;
    const checker = board[sy][sx];
    if (!checker?.isKing) return false;
    return isValidMove;
  }, [selected, isValidMove]);

  const squareClassNames = [
    styles.square,
    isHost ? styles.light : styles.dark,
    isValidMove && showHints ? `valid-move ${styles.validMove}` : '',
    isHighlightQueenPath && showHints ? styles.highlightQueenPath : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (checker && checker.player === state.currentPlayer && !state.multiCaptureMode) {
      selectChecker([y, x]);
    } else if (selected) {
      if (isValidMove) {
        moveChecker([y, x]);
      }
    }
  };

  return (
    <div className={squareClassNames} onClick={handleClick} data-position={`${x},${y}`}>
      {checker && <Checker checker={checker} isSelected={isSelected} currentPlayer={currentPlayer} />}
    </div>
  );
};
