import { Board } from '@/types/game';
import { BOARD_SIZE } from '@/constants';
import { Player } from '@/types/players';
import { getAvailableCaptures } from './getAvailableCaptures';

export function playerHasCapture(board: Board, player: Player): boolean {
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      if (board[y][x]?.player === player) {
        if (getAvailableCaptures(board, y, x).length > 0) return true;
      }
    }
  }
  return false;
}
