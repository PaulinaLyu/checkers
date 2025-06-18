import { Board } from '@/types/game';
import { isWithinBounds } from './isWithinBounds';
import { MOVE_DIRECTIONS } from '@/constants';

export function getAvailableMoves(board: Board, y: number, x: number): [number, number][] {
  const checker = board[y][x];
  if (!checker) return [];

  const moves: [number, number][] = [];

  for (const [dy, dx] of MOVE_DIRECTIONS) {
    let ny = y + dy,
      nx = x + dx;

    while (isWithinBounds(ny, nx) && board[ny][nx] === null) {
      moves.push([ny, nx]);
      if (!checker.isKing) break;

      ny += dy;
      nx += dx;
    }
  }
  return moves;
}
