import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagersState } from './managers.state';

export const managersFeatureKey = 'managers';

export const state = createFeatureSelector<ManagersState>(managersFeatureKey);

export const stories = createSelector(state, (state) => state.stories);
export const storiesLoader = createSelector(
  state,
  (state) => state.storiesLoader
);
