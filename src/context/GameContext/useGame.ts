import { useContext } from 'react';
import { GameContext } from './GameProvider';
import { Position } from '@/types/game';

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  const { state, dispatch } = context;

  const selectChecker = (pos: Position) => {
    dispatch({ type: 'SELECT', payload: pos });
  };

  const moveChecker = (pos: Position) => {
    dispatch({ type: 'MOVE', payload: pos });
  };

  const toggleHints = () => dispatch({ type: 'TOGGLE_HINTS' });

  const undoMove = () => dispatch({ type: 'UNDO' });

  const resetGame = () => dispatch({ type: 'RESET' });

  return { state, selectChecker, moveChecker, toggleHints, resetGame, undoMove };
}
