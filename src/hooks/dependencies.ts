import axios from 'axios';

import HttpAdapterAxiosImpl from '../interface/adapters/HttpAdapterAxiosImpl';
import LocalStorageServiceImpl from '../interface/services/LocalStorageImpl';

import AuthServiceRestImpl from '../interface/services/AuthServiceRestImpl';
import authUseCases from '../usecases/modules/auth';
import localStorageUseCases from '../usecases/modules/localStorage';
import sitioUseCases from '../usecases/modules/sitio';
import urls from '../constants/urls';
import SitioRepositoryImpl from '../interface/repositories/SitioRepositoryImpl';

const { auth: authUrls, sitio: sitioUrls } = urls;

const httpAdapter = new HttpAdapterAxiosImpl(axios);
const authService = new AuthServiceRestImpl(httpAdapter, authUrls);
const sitioRepository = new SitioRepositoryImpl(httpAdapter, sitioUrls);

const localStorageService = new LocalStorageServiceImpl();
const localStorageInteractor = localStorageUseCases({ localStorageService });
const authInteractor = authUseCases({ authService });
const sitioInteractor = sitioUseCases({ sitioRepository });

export const dependencies = {
  httpAdapter,
  authInteractor,
  localStorageInteractor,
  sitioInteractor,
};

export type Dependencies = typeof dependencies;
