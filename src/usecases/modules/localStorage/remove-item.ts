import LocalStorageService from '../../ports/LocalStorageService';

export type removeItemUseCase = (key: string) => void;

export const buildRemoveItem = (dependencies: {
  localStorageService: LocalStorageService;
}): removeItemUseCase => {
  const { localStorageService } = dependencies;

  const removeItem: removeItemUseCase = (key) =>
    localStorageService.removeItem(key);

  return removeItem;
};
