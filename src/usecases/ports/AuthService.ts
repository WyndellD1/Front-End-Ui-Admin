export default interface AuthService {
  signIn(
    email: string,
    password: string,
    remember: boolean,
  ): Promise<{ user: object | null }>;
  signUp(name: string, email: string, password: string): Promise<object | null>;
}
