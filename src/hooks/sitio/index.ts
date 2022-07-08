import { createContext, useContext } from 'react';
import { Sitio } from '../../domain/entities/sitio';

export type SitioHooks = {
  useFetchSitios: () => {
    fetchSitios: () => Promise<Sitio[]>;
  };
};

export const SitioHooksContext = createContext<SitioHooks | null>(null);

export const useSitioHooks = (): SitioHooks => {
  const context = useContext(SitioHooksContext);
  if (!context) {
    throw new Error(`Context not instantiated`);
  }
  return context;
};
