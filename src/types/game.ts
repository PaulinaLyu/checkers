import { Player } from './players';

export type Board = (Checker | null)[][];

export interface Checker {
  isKing: boolean;
  player: Player;
}

export type Position = [number, number];
