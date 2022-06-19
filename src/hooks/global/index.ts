import { createContext, useContext } from 'react';
import { User } from '../../domain/entities/user';

export type CurrentUser = { user: User } | undefined;

export type GlobalState = {
  useCurrentUser: {
    currentUser: CurrentUser;
    setCurrentUser: (user?: object) => void;
  };
};

export const GlobalStateContext = createContext<GlobalState | null>(null);

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(`Context not instantiated`);
  }
  return context;
};
