import { Board } from '@/types/game';
import { Player } from '@/types/players';
import { initializeBoard } from '@/utils/initializeBoard';

export type State = {
  board: Board;
  currentPlayer: Player;
  selected: [number, number] | null;
  multiCaptureMode: boolean;
  history: Board[];
  hostScore: number;
  opponentScore: number;
  showHints: boolean;
  winner: Player | null;
};

export const initialState: State = {
  board: initializeBoard(),
  currentPlayer: Player.HOST,
  selected: null,
  multiCaptureMode: false,
  history: [],
  hostScore: 0,
  opponentScore: 0,
  showHints: true,
  winner: null,
};
