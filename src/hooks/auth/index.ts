import { createContext, useContext } from 'react';

export type AuthHooks = {
  useLogin: () => {
    login: (
      email: string,
      password: string,
      remember: boolean,
    ) => Promise<object | null>;
  };
  useSignUp: () => {
    signUpUser: (
      name: string,
      email: string,
      password: string,
    ) => Promise<Object | null>;
  };
};

export const AuthHooksContext = createContext<AuthHooks | null>(null);

export const useAuthHooks = (): AuthHooks => {
  const context = useContext(AuthHooksContext);
  if (!context) {
    throw new Error(`Context not instantiated`);
  }
  return context;
};
