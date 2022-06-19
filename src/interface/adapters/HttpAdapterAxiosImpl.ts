import {
  AxiosResponse,
  AxiosError,
  AxiosStatic,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';
import { HttpAdapter } from '../../usecases/ports/HttpAdapter';

export default class HttpAdapterAxiosImpl implements HttpAdapter {
  token?: string;
  axios: AxiosInstance;

  constructor(axios: AxiosStatic, baseURL?: string) {
    if (baseURL) {
      this.axios = axios.create({
        baseURL,
      });
    } else {
      this.axios = axios;
    }
  }

  checkAuthError = (error: AxiosError): AxiosError => {
    const statusCode = (error.response?.data as any)?.status_code;

    if (statusCode && statusCode === 401) {
      window.location.href = '/signin?isNotAuth=true';
    }

    return error;
  };

  get = (url: string, options: Object): Promise<AxiosResponse> => {
    try {
      const config = this.token
        ? { ...options, headers: { Authorization: `Bearer ${this.token}` } }
        : options;
      return this.axios.get(url, config);
    } catch (err) {
      throw this.checkAuthError(err as AxiosError);
    }
  };

  post = async (
    url: string,
    body: Object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    try {
      const newConfig = this.token
        ? { ...config, headers: { Authorization: `Bearer ${this.token}` } }
        : { ...config };

      return await this.axios.post(url, body, newConfig);
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        throw Error('Network Error');
      } else {
        throw this.checkAuthError(error);
      }
    }
  };

  patch = (url: string, body: Object): Promise<AxiosResponse> => {
    try {
      const config = this.token
        ? { headers: { Authorization: `Bearer ${this.token}` } }
        : {};

      return this.axios.patch(url, body, config);
    } catch (err) {
      throw this.checkAuthError(err as AxiosError);
    }
  };

  put = (url: string, body: Object): Promise<AxiosResponse> => {
    try {
      const config = this.token
        ? { headers: { Authorization: `Bearer ${this.token}` } }
        : {};

      return this.axios.put(url, body, config);
    } catch (err) {
      throw this.checkAuthError(err as AxiosError);
    }
  };

  delete = (url: string, options: Object): Promise<AxiosResponse> => {
    try {
      const config = this.token
        ? { ...options, headers: { Authorization: `Bearer ${this.token}` } }
        : options;

      return this.axios.delete(url, config);
    } catch (err) {
      throw this.checkAuthError(err as AxiosError);
    }
  };

  setToken = (token: string): void => {
    this.token = token;
  };
}
