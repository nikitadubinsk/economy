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
export const chapter = createSelector(state, (state) => state.chapter);
export const story = createSelector(state, (state) => state.story);
export const loaderButton = createSelector(
  state,
  (state) => state.loaderButton
);
export const storyId = createSelector(state, (state) => state.storyId);
