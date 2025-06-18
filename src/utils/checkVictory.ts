import { WINNING_SCORE } from '@/constants';
import { State } from '@/context/GameContext';
import { Player } from '@/types/players';

export function checkVictory(state: State): Player | null {
  const score = state.currentPlayer === Player.HOST ? state.hostScore : state.opponentScore;
  return score + 1 === WINNING_SCORE ? state.currentPlayer : null;
}
