import { playerHasCapture } from '@/utils/playerHasCapture';
import { getAvailableCaptures } from '@/utils/getAvailableCaptures';
import { Player } from '@/types/players';
import { BOARD_SIZE } from '@/constants';
import { checkVictory } from '@/utils/checkVictory';
import { Action } from './GameActions';
import { initialState, State } from './GameInitialState';

export function GameReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SELECT': {
      const [y, x] = action.payload;
      const checker = state.board[y][x];
      if (!checker || checker.player !== state.currentPlayer) return state;

      if (playerHasCapture(state.board, state.currentPlayer)) {
        const captures = getAvailableCaptures(state.board, y, x);
        if (captures.length === 0) return state;
      }
      return { ...state, selected: [y, x] };
    }
    case 'MOVE': {
      const [toY, toX] = action.payload;
      const [fromY, fromX] = state.selected!;
      const board = state.board.map(row => row.slice());
      const checker = board[fromY][fromX];
      if (!checker) return state;

      const dy = toY - fromY;
      const dx = toX - fromX;
      const distance = Math.abs(dy);
      const stepY = dy / distance;
      const stepX = dx / distance;

      let cy = fromY + stepY;
      let cx = fromX + stepX;

      let isCapture = false;
      let enemyFound = false;
      let enemyY = -1;
      let enemyX = -1;

      if (checker.isKing) {
        while (cy !== toY && cx !== toX) {
          const cell = board[cy][cx];

          if (cell) {
            if (cell.player === checker.player) {
              return state;
            }

            if (enemyFound) {
              return state;
            }

            enemyFound = true;
            enemyY = cy;
            enemyX = cx;
          }

          cy += stepY;
          cx += stepX;
        }

        if (enemyFound) {
          isCapture = true;
          board[enemyY][enemyX] = null;
        }
      } else {
        let captured = false;

        while (cy !== toY && cx !== toX) {
          const cell = board[cy][cx];

          if (cell) {
            if (cell.player === checker.player) {
              return state;
            }

            if (captured) return state;
            captured = true;
            isCapture = true;
          }

          cy += stepY;
          cx += stepX;
        }

        if (isCapture) {
          cy = fromY + stepY;
          cx = fromX + stepX;

          while (cy !== toY && cx !== toX) {
            if (board[cy][cx]?.player !== checker?.player) {
              board[cy][cx] = null;
              break;
            }

            cy += stepY;
            cx += stepX;
          }
        }
      }

      board[fromY][fromX] = null;
      board[toY][toX] = checker;

      if (
        (checker.player === Player.HOST && toY === 0) ||
        (checker.player === Player.OPPONENT && toY === BOARD_SIZE - 1)
      ) {
        board[toY][toX] = { ...checker, isKing: true };
      }

      const furtherCaptures = isCapture ? getAvailableCaptures(board, toY, toX) : [];

      if (isCapture && furtherCaptures.length > 0) {
        return {
          ...state,
          board,
          selected: [toY, toX],
          currentPlayer: state.currentPlayer,
          multiCaptureMode: true,
          ...(state.currentPlayer === Player.OPPONENT && {
            opponentScore: state.opponentScore + 1,
          }),
          ...(state.currentPlayer === Player.HOST && {
            hostScore: state.hostScore + 1,
          }),
          history: [...state.history, state.board],
        };
      }

      return {
        ...state,
        board,
        selected: null,
        currentPlayer: state.currentPlayer === Player.HOST ? Player.OPPONENT : Player.HOST,
        multiCaptureMode: false,
        ...(state.currentPlayer === Player.OPPONENT &&
          isCapture && {
            opponentScore: state.opponentScore + 1,
          }),
        ...(state.currentPlayer === Player.HOST &&
          isCapture && {
            hostScore: state.hostScore + 1,
          }),
        history: [...state.history, state.board],
        winner: isCapture ? checkVictory(state) : null,
      };
    }
    case 'UNDO': {
      const lastBoard = state.history[state.history.length - 1];
      if (!lastBoard) return state;

      return {
        ...state,
        board: lastBoard,
        history: state.history.slice(0, -1),
        selected: null,
        multiCaptureMode: false,
        currentPlayer: state.currentPlayer === Player.HOST ? Player.OPPONENT : Player.HOST,
      };
    }
    case 'TOGGLE_HINTS':
      return {
        ...state,
        showHints: !state.showHints,
      };

    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
