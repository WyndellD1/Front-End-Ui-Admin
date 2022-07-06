import AuthService from '../../ports/AuthService';

export type resendVerificationEmailUseCase = () => Promise<void>;

export const buildResendVerificationEmail = (dependencies: {
  authService: AuthService;
}): resendVerificationEmailUseCase => {
  const { authService } = dependencies;

  const resendVerificationEmail: resendVerificationEmailUseCase = () =>
    authService.resendVerificationEmail();

  return resendVerificationEmail;
};
