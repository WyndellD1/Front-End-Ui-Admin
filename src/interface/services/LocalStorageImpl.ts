import LocalStorageService from '../../usecases/ports/LocalStorageService';

export default class LocalStorageServiceImpl implements LocalStorageService {
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearSessionStorage(): void {
    sessionStorage.clear();
  }
}
