import { Action, createReducer, on } from '@ngrx/store';
import { loadStatistics } from './admin.actions';
import { AdminState, initialState } from './admin.state';

const reducer = createReducer(
  initialState,
  on(loadStatistics, (state) => ({
    ...state,
    loading: true,
  }))
);

export function adminReducer(state: AdminState | undefined, action: Action) {
  return reducer(state, action);
}
