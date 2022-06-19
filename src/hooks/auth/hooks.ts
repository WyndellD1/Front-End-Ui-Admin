import { useCallback } from 'react';
import { AuthHooks } from '.';
import { useDependencies } from '..';
import storageKeys from '../../constants/localStorage/storageKeys';
import { SignUpParams } from '../../domain/entities/user';
import { useGlobalState } from '../global';

export const useLogin: AuthHooks['useLogin'] = (): {
  login: (
    email: string,
    password: string,
    remember: boolean,
  ) => Promise<Object | null>;
} => {
  const { authInteractor, localStorageInteractor } = useDependencies();

  const { signIn } = authInteractor;
  const { setItem } = localStorageInteractor;
  const {
    useCurrentUser: { setCurrentUser },
  } = useGlobalState();

  const login = useCallback(
    async (email: string, password: string, remember: boolean) => {
      const response = await signIn(email, password, remember);
      remember
        ? setItem(storageKeys.USER_STORAGE_KEY, JSON.stringify(response))
        : setCurrentUser(response);

      return response;
    },
    [signIn],
  );

  return { login };
};

export const useSignUp: AuthHooks['useSignUp'] = (): {
  signUpUser: (data: SignUpParams, password: string) => Promise<Object | null>;
} => {
  const { authInteractor } = useDependencies();
  const { signUp } = authInteractor;
  const {
    useCurrentUser: { setCurrentUser },
  } = useGlobalState();

  const signUpUser = useCallback(
    async (data: SignUpParams, password: string) => {
      const response = await signUp(data, password);
      setCurrentUser({ ...response });

      return response;
    },
    [],
  );

  return { signUpUser };
};
