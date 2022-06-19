import AuthService from '../../ports/AuthService';
import { buildSignInUser, signInUserUseCase } from './signin-user';
import { buildSignUp, signUpUseCase } from './signup';

export default (dependencies: {
  authService: AuthService;
}): {
  signIn: signInUserUseCase;
  signUp: signUpUseCase;
} => {
  const { authService } = dependencies;

  const signIn = buildSignInUser({ authService });
  const signUp = buildSignUp({ authService });

  return { signIn, signUp };
};
