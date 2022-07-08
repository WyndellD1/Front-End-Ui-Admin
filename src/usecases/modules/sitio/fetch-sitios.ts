import { Sitio } from '../../../domain/entities/sitio';
import SitioRepository from '../../ports/SitioRepository';

export type fetchSitiosUseCase = () => Promise<Sitio[]>;

export const buildFetchSitios = (dependencies: {
  sitioRepository: SitioRepository;
}): fetchSitiosUseCase => {
  const { sitioRepository } = dependencies;

  const fetchSitios: fetchSitiosUseCase = () => sitioRepository.fetchSitios();

  return fetchSitios;
};
