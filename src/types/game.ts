import { Player } from './players';

export enum CheckerType {
  REGULAR = 'REGULAR',
  KING = 'KING',
}

export interface Checker {
  type: CheckerType;
  player: Player;
}

export interface Position {
  row: number;
  col: number;
}
