import React from 'react';
import GlobalStateProvider from './global/Provider';
import { dependencies, Dependencies } from './dependencies';
import { AuthHooksContext } from './auth';
import * as authHooks from './auth/hooks';
import { SnackbarProvider } from 'notistack';

export const DependenciesContext = React.createContext<Dependencies | null>(
  null,
);

export const useDependencies = (): Dependencies => {
  const context = React.useContext(DependenciesContext);
  if (!context) {
    throw new Error(`Context not instantiated`);
  }
  return context;
};

type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

const Provider = ({ children }: Props): React.ReactElement => {
  return (
    <DependenciesContext.Provider value={dependencies}>
      <SnackbarProvider>
        <GlobalStateProvider>
          <AuthHooksContext.Provider value={authHooks}>
            {children}
          </AuthHooksContext.Provider>
        </GlobalStateProvider>
      </SnackbarProvider>
    </DependenciesContext.Provider>
  );
};

export default Provider;
