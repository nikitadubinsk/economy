import { Action, createReducer, on } from '@ngrx/store';
import { ManagersState, initialState } from './managers.state';
import { loadStories, loadedStories } from './managers.actions';

const reducer = createReducer(
  initialState,
  on(loadStories, (state) => ({
    ...state,
    storiesLoader: true,
  })),
  on(loadedStories, (state, { stories }) => ({
    ...state,
    storiesLoader: false,
    stories,
  }))
);

export function managersReducer(
  state: ManagersState | undefined,
  action: Action
) {
  return reducer(state, action);
}
