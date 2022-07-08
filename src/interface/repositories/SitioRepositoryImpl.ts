import { URLsType } from '../../constants/urls';
import { Sitio } from '../../domain/entities/sitio';
import { HttpAdapter } from '../../usecases/ports/HttpAdapter';
import SitioRepository from '../../usecases/ports/SitioRepository';

export default class SitioRepositoryImpl implements SitioRepository {
  httpAdapter: HttpAdapter;
  urls: URLsType['sitio'];

  constructor(httpAdapter: HttpAdapter, urls: URLsType['sitio']) {
    this.httpAdapter = httpAdapter;
    this.urls = urls;
  }

  fetchSitios = async (): Promise<Sitio[]> => {
    const response = await this.httpAdapter.get(this.urls.fetchSitios, {});

    const data = response.data;

    return data.map(
      (sitio: {
        pkSitioID: number;
        pkSitioName: string;
        pkSitioLatitude: string;
        pkSitioLongitude: string;
      }) => {
        return {
          id: sitio.pkSitioID,
          name: sitio.pkSitioName,
          latitude: sitio.pkSitioLatitude,
          longitude: sitio.pkSitioLongitude,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        };
      },
    );
  };
}
