import AuthService from '../../ports/AuthService';

export type signUpUseCase = (
  name: string,
  email: string,
  password: string,
) => Promise<object | null>;

export const buildSignUp = (dependencies: {
  authService: AuthService;
}): signUpUseCase => {
  const { authService } = dependencies;

  const signUp: signUpUseCase = (name, email, password) =>
    authService.signUp(name, email, password);

  return signUp;
};
