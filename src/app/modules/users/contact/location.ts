import { Address } from '../user';

export interface Location {
  id: string;
  name: string;
  department: string;
  country: Country;
  address: Address;
}

export enum Country {
  Polska,
  Czechy,
  Fracja,
  Rosja
}
