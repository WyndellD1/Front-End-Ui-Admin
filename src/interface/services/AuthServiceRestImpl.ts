import { format } from 'date-fns';
import { URLsType } from '../../constants/urls';
import {
  GenericError,
  LoginValidationError,
} from '../../domain/entities/errors';
import { User, SignUpParams, UserDetails } from '../../domain/entities/user';
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
    await this.httpAdapter.get(this.urls.csrf, {});

    const response = await this.httpAdapter.post(this.urls.login, {
      email,
      password,
      remember,
    });

    return { user: response.data.data };
  }

  signUp = async (
    data: SignUpParams,
    password: string,
  ): Promise<object | null> => {
    const params = {
      userBday: format(data.birthdate, 'yyyy-MM-dd HH:mm:ss'),
      email: data.email,
      userMiddleName: data.middleName,
      userFirstName: data.firstName,
      userGender: data.gender,
      userLastName: data.lastName,
      password,
      userPhoneNum: data.phoneNumber,
      password_confirmation: password,
      remember: 0,
    };

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
  };

  resendVerificationEmail = async (): Promise<void> => {
    const response = await this.httpAdapter.post(
      this.urls.resendVerification,
      {},
    );

    return response.data;
  };

  customUrlRequest = async (url: string): Promise<any> => {
    const response = await this.httpAdapter.get(url, {});

    return response.data;
  };

  fetchUserDetails = async (): Promise<UserDetails> => {
    const response = await this.httpAdapter.get(this.urls.user, {});

    return response.data;
  };
}
