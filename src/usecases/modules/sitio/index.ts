import SitioRepository from '../../ports/SitioRepository';

import { buildFetchSitios, fetchSitiosUseCase } from './fetch-sitios';

export default (dependencies: {
  sitioRepository: SitioRepository;
}): {
  fetchSitios: fetchSitiosUseCase;
} => {
  const { sitioRepository } = dependencies;

  const fetchSitios = buildFetchSitios({ sitioRepository });

  return {
    fetchSitios,
  };
};
