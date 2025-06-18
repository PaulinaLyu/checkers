export type Action =
  | { type: 'SELECT'; payload: [number, number] }
  | { type: 'MOVE'; payload: [number, number] }
  | { type: 'RESET' }
  | { type: 'UNDO' }
  | { type: 'TOGGLE_HINTS' };
