import { useCallback } from 'react';
import { SitioHooks } from '.';
import { useDependencies } from '..';
import { Sitio } from '../../domain/entities/sitio';

export const useFetchSitios: SitioHooks['useFetchSitios'] = (): {
  fetchSitios: () => Promise<Sitio[]>;
} => {
  const { sitioInteractor } = useDependencies();

  const fetchSitios = useCallback(async () => {
    const response = await sitioInteractor.fetchSitios();

    return response;
  }, []);

  return { fetchSitios };
};
