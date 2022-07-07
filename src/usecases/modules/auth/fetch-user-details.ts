import { UserDetails } from '../../../domain/entities/user';
import AuthService from '../../ports/AuthService';

export type fetchUserDetailsUseCase = () => Promise<UserDetails>;

export const buildFetchUserDetails = (dependencies: {
  authService: AuthService;
}): fetchUserDetailsUseCase => {
  const { authService } = dependencies;

  const fetchUserDetails: fetchUserDetailsUseCase = () =>
    authService.fetchUserDetails();

  return fetchUserDetails;
};
