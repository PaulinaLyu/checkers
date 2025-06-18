import { Board } from '@/types/game';
import { isWithinBounds } from './isWithinBounds';
import { MOVE_DIRECTIONS } from '@/constants';

export function getAvailableCaptures(board: Board, y: number, x: number): [number, number][] {
  const checker = board[y][x];

  if (!checker) return [];

  const captures: [number, number][] = [];

  for (const [dy, dx] of MOVE_DIRECTIONS) {
    let ny = y + dy,
      nx = x + dx;

    while (isWithinBounds(ny, nx)) {
      const current = board[ny][nx];

      if (current?.player && current.player !== checker.player) {
        let cy = ny + dy,
          cx = nx + dx;

        const possibleLanding: [number, number][] = [];

        while (isWithinBounds(cy, cx) && board[cy][cx] === null) {
          possibleLanding.push([cy, cx]);

          if (!checker.isKing) break;

          cy += dy;
          cx += dx;
        }

        if (possibleLanding.length > 0) {
          captures.push(...possibleLanding);
        }

        break;
      }

      if (current) break;

      if (!checker.isKing) break;

      ny += dy;
      nx += dx;
    }
  }

  return captures;
}
