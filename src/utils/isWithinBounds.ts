import { BOARD_SIZE } from '@/constants';

export function isWithinBounds(y: number, x: number): boolean {
  return y >= 0 && y < BOARD_SIZE && x >= 0 && x < BOARD_SIZE;
}
