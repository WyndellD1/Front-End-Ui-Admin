import { Sitio } from '../../domain/entities/sitio';

export default interface SitioRepository {
  fetchSitios(): Promise<Sitio[]>;
}
