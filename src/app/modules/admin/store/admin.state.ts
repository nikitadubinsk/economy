import { IRate } from '../models/rates.model';

export interface AdminState {
  statistics: [] | null;
  rates: IRate[];
  rate: IRate | null;
  loadingRates: boolean;
  loading: boolean;
}

export const initialState: AdminState = {
  statistics: null,
  rates: [],
  rate: null,
  loadingRates: false,
  loading: false,
};
