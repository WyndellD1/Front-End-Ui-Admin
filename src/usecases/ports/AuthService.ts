import { SignUpParams } from '../../domain/entities/user';

export default interface AuthService {
  signIn(
    email: string,
    password: string,
    remember: boolean,
  ): Promise<{ user: object | null }>;
  signUp(data: SignUpParams, password: string): Promise<object | null>;
  resendVerificationEmail(): Promise<void>;
}
