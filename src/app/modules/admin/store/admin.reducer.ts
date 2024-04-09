import { Action, createReducer, on } from '@ngrx/store';
import {
  chooseRate,
  clearRate,
  createRate,
  loadRateById,
  loadRates,
  loadStatistics,
  loadedRateById,
  loadedRates,
  turnOffLoading,
  updateRate,
} from './admin.actions';
import { AdminState, initialState } from './admin.state';

const reducer = createReducer(
  initialState,
  on(loadStatistics, (state) => ({
    ...state,
    loading: true,
  })),
  on(chooseRate, (state, { rate }) => ({
    ...state,
    rate,
  })),
  on(clearRate, (state) => ({
    ...state,
    rate: null,
  })),
  on(loadRates, (state) => ({
    ...state,
    loadingRates: true,
  })),
  on(loadedRates, (state, { rates }) => ({
    ...state,
    rates,
    loadingRates: false,
  })),
  on(loadRateById, (state) => ({
    ...state,
    loadingRates: true,
  })),
  on(loadedRateById, (state, { rate }) => ({
    ...state,
    rate,
    loadingRates: false,
  })),
  on(createRate, (state) => ({
    ...state,
    loading: true,
  })),
  on(updateRate, (state) => ({
    ...state,
    loading: true,
  })),
  on(turnOffLoading, (state) => ({
    ...state,
    loading: false,
  }))
);

export function adminReducer(state: AdminState | undefined, action: Action) {
  return reducer(state, action);
}
