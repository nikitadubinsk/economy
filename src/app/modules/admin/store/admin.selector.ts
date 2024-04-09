import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminState } from './admin.state';

export const adminFeatureKey = 'admin';

export const state = createFeatureSelector<AdminState>(adminFeatureKey);

export const statistics = createSelector(state, (state) => state.statistics);
export const rates = createSelector(state, (state) => state.rates);
export const rate = createSelector(state, (state) => state.rate);
export const loadingRates = createSelector(
  state,
  (state) => state.loadingRates
);
export const loading = createSelector(state, (state) => state.loading);
