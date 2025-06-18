import { FC, ReactNode, Dispatch, createContext, useReducer } from 'react';
import { initialState, State } from './GameInitialState';
import { Action } from './GameActions';
import { GameReducer } from './reducer';

export const GameContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
} | null>(null);

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};
