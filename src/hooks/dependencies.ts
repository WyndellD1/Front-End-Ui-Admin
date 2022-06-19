import axios from 'axios';

import HttpAdapterAxiosImpl from '../interface/adapters/HttpAdapterAxiosImpl';
import LocalStorageServiceImpl from '../interface/services/LocalStorageImpl';

import AuthServiceRestImpl from '../interface/services/AuthServiceRestImpl';
import authUseCases from '../usecases/modules/auth';
import localStorageUseCases from '../usecases/modules/localStorage';
import urls from '../constants/urls';

const { auth: authUrls } = urls;

const httpAdapter = new HttpAdapterAxiosImpl(axios);

const authService = new AuthServiceRestImpl(httpAdapter, authUrls);

const localStorageService = new LocalStorageServiceImpl();
const localStorageInteractor = localStorageUseCases({ localStorageService });
const authInteractor = authUseCases({ authService });

export const dependencies = {
  httpAdapter,
  authInteractor,
  localStorageInteractor,
};

export type Dependencies = typeof dependencies;
