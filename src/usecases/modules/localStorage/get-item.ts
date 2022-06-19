import LocalStorageService from '../../ports/LocalStorageService';

export type getItemUseCase = (key: string) => string | null;

export const buildGetItem = (dependencies: {
  localStorageService: LocalStorageService;
}): getItemUseCase => {
  const { localStorageService } = dependencies;

  const getItem: getItemUseCase = (key) => localStorageService.getItem(key);

  return getItem;
};
