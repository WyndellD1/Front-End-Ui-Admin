import AuthService from '../../ports/AuthService';

export type customUrlRequestUseCase = (url: string) => Promise<any>;

export const buildCustomUrlRequest = (dependencies: {
  authService: AuthService;
}): customUrlRequestUseCase => {
  const { authService } = dependencies;

  const customUrlRequest: customUrlRequestUseCase = (url) =>
    authService.customUrlRequest(url);

  return customUrlRequest;
};
