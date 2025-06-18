import { BOARD_SIZE } from '@/constants';
import { Board } from '@/types/game';
import { Player } from '@/types/players';

export function initializeBoard(): Board {
  const board: Board = Array.from({ length: BOARD_SIZE }, (_, y) =>
    Array.from({ length: BOARD_SIZE }, (_, x) => {
      if (y < 3 && (x + y) % 2 === 1) return { player: Player.OPPONENT, isKing: false };
      if (y > 4 && (x + y) % 2 === 1) return { player: Player.HOST, isKing: false };
      return null;
    }),
  );
  return board;
}
