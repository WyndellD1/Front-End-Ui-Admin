import AuthService from '../../ports/AuthService';

export type signInUserUseCase = (
  email: string,
  password: string,
  remember: boolean,
) => Promise<{ user: object | null }>;
export const buildSignInUser = (dependencies: {
  authService: AuthService;
}): signInUserUseCase => {
  const { authService } = dependencies;

  const signInUser: signInUserUseCase = (email, password, remember) =>
    authService.signIn(email, password, remember);

  return signInUser;
};
