import { URLsType } from '../../constants/urls';
import {
  GenericError,
  LoginValidationError,
} from '../../domain/entities/errors';
import { User } from '../../domain/entities/user';
import AuthService from '../../usecases/ports/AuthService';
import { HttpAdapter } from '../../usecases/ports/HttpAdapter';

export default class AuthServiceRestImpl implements AuthService {
  httpAdapter: HttpAdapter;

  urls: URLsType['auth'];

  constructor(httpAdapter: HttpAdapter, urls: URLsType['auth']) {
    this.httpAdapter = httpAdapter;
    this.urls = urls;
  }

  async signIn(
    email: string,
    password: string,
    remember: boolean,
  ): Promise<{ user: object | null }> {
    return { user: null };
  }

  signUp = async (
    name: string,
    email: string,
    password: string,
  ): Promise<object | null> => {
    const params = { email, password, fullname: name, remember: 0 };

    const response = await this.httpAdapter.post(this.urls.signup, params);

    if (response.data.status_code === 200) {
      const data: { data: User; status_code: number } = response.data;

      return {
        user: {
          ...data.data,
        },
      };
    } else {
      if (response.data.status_code !== 400) {
        const error: GenericError = response.data;

        throw new Error(error.message);
      } else {
        const error: LoginValidationError = response.data;
        const message = '';
        message.concat(error.errors.email || '');
        message.concat(error.errors.password || '');
        message.concat(error.errors.remember || '');

        throw new Error(message);
      }
    }
    return null;
  };
}
