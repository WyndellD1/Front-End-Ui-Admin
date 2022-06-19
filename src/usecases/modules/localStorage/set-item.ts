import LocalStorageService from '../../ports/LocalStorageService';

export type setItemUseCase = (key: string, value: string) => void;

export const buildSetItem = (dependencies: {
  localStorageService: LocalStorageService;
}): setItemUseCase => {
  const { localStorageService } = dependencies;

  const setItem: setItemUseCase = (key, value) =>
    localStorageService.setItem(key, value);

  return setItem;
};
