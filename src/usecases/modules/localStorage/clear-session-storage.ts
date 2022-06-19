import LocalStorageService from '../../ports/LocalStorageService';

export type clearSessionUseCase = () => void;

export const buildClearSession = (dependencies: {
  localStorageService: LocalStorageService;
}): clearSessionUseCase => {
  const { localStorageService } = dependencies;

  const clearSession: clearSessionUseCase = () =>
    localStorageService.clearSessionStorage();

  return clearSession;
};
