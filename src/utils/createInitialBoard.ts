import { Checker, CheckerType } from '@/types/game';
import { Player } from '@/types/players';

export const createInitialBoard = (): (Checker | null)[][] => {
  const board: (Checker | null)[][] = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 1) {
        board[row][col] = { type: CheckerType.REGULAR, player: Player.OPPONENT };
      }
    }
  }

  for (let row = 5; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 1) {
        board[row][col] = { type: CheckerType.REGULAR, player: Player.HOST };
      }
    }
  }

  return board;
};
