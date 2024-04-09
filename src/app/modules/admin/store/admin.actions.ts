import { createAction, props } from '@ngrx/store';
import { adminFeatureKey } from './admin.selector';
import { ICreateRate, IRate } from '../models/rates.model';

export const loadStatistics = createAction(
  `[${adminFeatureKey}] LOAD_STATISTICS`
);
export const loadRates = createAction(`[${adminFeatureKey}] LOAD_RATES`);
export const loadedRates = createAction(
  `[${adminFeatureKey}] LOADED_RATES`,
  props<{
    rates: IRate[];
  }>()
);
export const chooseRate = createAction(
  `[${adminFeatureKey}] CHOOS_A_RATE`,
  props<{
    rate: IRate;
  }>()
);
export const activeRate = createAction(
  `[${adminFeatureKey}] ACTIVE_RATE`,
  props<{
    active: boolean;
    id: number;
  }>()
);
export const loadRateById = createAction(
  `[${adminFeatureKey}] LOAD_RATE_BY_ID`,
  props<{
    id: number;
  }>()
);
export const loadedRateById = createAction(
  `[${adminFeatureKey}] LOADED_RATE_BY_ID`,
  props<{
    rate: IRate;
  }>()
);
export const clearRate = createAction(`[${adminFeatureKey}] CLEAR_RATE`);
export const createRate = createAction(
  `[${adminFeatureKey}] CREATE_RATE`,
  props<{
    rate: ICreateRate;
  }>()
);
export const updateRate = createAction(
  `[${adminFeatureKey}] UPDATE_RATE`,
  props<{
    rate: ICreateRate;
    id: number;
  }>()
);
export const turnOffLoading = createAction(
  `[${adminFeatureKey}] TURN_OFF_LOADING`
);
