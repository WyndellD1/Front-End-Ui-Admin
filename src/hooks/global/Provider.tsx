import React, { useState } from 'react';
import { CurrentUser, GlobalState, GlobalStateContext } from '.';
import { useDependencies } from '..';
import storageKeys from '../../constants/localStorage/storageKeys';

type Props = {
  value?: GlobalState;
  children?: React.ReactElement;
};

const INITIAL_USER = undefined;

const Provider = (props: Props): React.ReactElement => {
  const { localStorageInteractor, httpAdapter } = useDependencies();
  const { getItem, setItem } = localStorageInteractor;

  const [currentUser, setCurrentUser] = useState<CurrentUser>(() => {
    try {
      const item = getItem(storageKeys.USER_STORAGE_KEY);
      const user = item ? JSON.parse(item) : INITIAL_USER;
      const token = user?.user?.token;
      return user;
    } catch (error) {
      console.error(error);
      return INITIAL_USER;
    }
  });
  window.addEventListener('storage', () => {
    const user = getItem(storageKeys.USER_STORAGE_KEY);
    if (currentUser && !user) {
      setCurrentUser(undefined);
    }
  });

  const useCurrentUser = React.useMemo(
    () => ({
      currentUser,
      setCurrentUser: (user?: object): void => {
        const typedUser = user as CurrentUser | undefined;
        setCurrentUser(typedUser);
        setItem(storageKeys.USER_STORAGE_KEY, JSON.stringify(typedUser));
      },
    }),
    [currentUser],
  );

  return (
    <>
      <GlobalStateContext.Provider value={{ useCurrentUser }} {...props} />
    </>
  );
};

export default Provider;
