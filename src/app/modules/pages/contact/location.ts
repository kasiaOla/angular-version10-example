import { Address } from '../../users/user';

export interface Location {
  id: string;
  name: string;
  department: string;
  readonly country: Country;
  address: Address;
}

export enum Country {
  Polska,
  Czechy,
  Fracja,
  Rosja
}
