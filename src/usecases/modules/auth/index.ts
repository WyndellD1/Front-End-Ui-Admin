import AuthService from '../../ports/AuthService';
import {
  buildCustomUrlRequest,
  customUrlRequestUseCase,
} from './custom-url-request';
import {
  buildFetchUserDetails,
  fetchUserDetailsUseCase,
} from './fetch-user-details';
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
  customUrlRequest: customUrlRequestUseCase;
  fetchUserDetails: fetchUserDetailsUseCase;
} => {
  const { authService } = dependencies;

  const signIn = buildSignInUser({ authService });
  const signUp = buildSignUp({ authService });
  const resendVerificationEmail = buildResendVerificationEmail({ authService });
  const customUrlRequest = buildCustomUrlRequest({ authService });
  const fetchUserDetails = buildFetchUserDetails({ authService });

  return {
    signIn,
    signUp,
    resendVerificationEmail,
    customUrlRequest,
    fetchUserDetails,
  };
};
