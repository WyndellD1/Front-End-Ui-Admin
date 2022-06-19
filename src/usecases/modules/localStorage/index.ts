import { buildGetItem, getItemUseCase } from './get-item';
import { buildSetItem, setItemUseCase } from './set-item';
import { buildRemoveItem, removeItemUseCase } from './remove-item';
import {
  buildClearSession,
  clearSessionUseCase,
} from './clear-session-storage';

import LocalStorageService from '../../ports/LocalStorageService';

export default (dependencies: {
  localStorageService: LocalStorageService;
}): {
  getItem: getItemUseCase;
  setItem: setItemUseCase;
  removeItem: removeItemUseCase;
  clearSession: clearSessionUseCase;
} => {
  const { localStorageService } = dependencies;
  const getItem = buildGetItem({ localStorageService });
  const setItem = buildSetItem({ localStorageService });
  const removeItem = buildRemoveItem({ localStorageService });
  const clearSession = buildClearSession({ localStorageService });

  return {
    getItem,
    setItem,
    removeItem,
    clearSession,
  };
};
