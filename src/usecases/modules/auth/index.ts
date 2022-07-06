import AuthService from '../../ports/AuthService';
import {
  buildResendVerificationEmail,
  resendVerificationEmailUseCase,
} from './resend-verification-email';
import { buildSignInUser, signInUserUseCase } from './signin-user';
import { buildSignUp, signUpUseCase } from './signup';

export default (dependencies: {
  authService: AuthService;
}): {
  signIn: signInUserUseCase;
  signUp: signUpUseCase;
  resendVerificationEmail: resendVerificationEmailUseCase;
} => {
  const { authService } = dependencies;

  const signIn = buildSignInUser({ authService });
  const signUp = buildSignUp({ authService });
  const resendVerificationEmail = buildResendVerificationEmail({ authService });

  return { signIn, signUp, resendVerificationEmail };
};
