import { BaseModel } from './baseModel';

export type Sitio = {
  name: string;
  latitude?: string;
  longitude?: string;
} & BaseModel;
