import { SignUpParams } from '../../../domain/entities/user';
import AuthService from '../../ports/AuthService';

export type signUpUseCase = (
  data: SignUpParams,
  password: string,
) => Promise<object | null>;

export const buildSignUp = (dependencies: {
  authService: AuthService;
}): signUpUseCase => {
  const { authService } = dependencies;

  const signUp: signUpUseCase = (data, password) =>
    authService.signUp(data, password);

  return signUp;
};
