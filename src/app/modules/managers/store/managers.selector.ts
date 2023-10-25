import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagersState } from './managers.state';

export const managersFeatureKey = 'managers';

export const state = createFeatureSelector<ManagersState>(managersFeatureKey);

export const stories = createSelector(state, (state) => state.stories);
export const chapters = createSelector(state, (state) => state.chapters);
export const loader = createSelector(state, (state) => state.loader);
export const isChangeEntity = createSelector(
  state,
  (state) => state.isChangeEntity
);
export const storyFilters = createSelector(
  state,
  (state) => state.storyFilters
);
