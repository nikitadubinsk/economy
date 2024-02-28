import { Action, createReducer, on } from '@ngrx/store';
import { ManagersState, initialState } from './managers.state';
import {
  changeWeightStoriesSuccess,
  loadChapters,
  loadStories,
  loadedChapters,
  loadedStories,
  selectChapter,
} from './managers.actions';

const reducer = createReducer(
  initialState,
  on(loadStories, (state, { filters }) => ({
    ...state,
    loader: true,
    storyFilters: filters,
  })),
  on(loadedStories, (state, { stories }) => ({
    ...state,
    loader: false,
    stories,
  })),
  on(changeWeightStoriesSuccess, (state, { stories }) => ({
    ...state,
    stories,
    isChangeEntity: true,
  })),
  on(loadChapters, (state) => ({
    ...state,
    loader: true,
  })),
  on(loadedChapters, (state, { chapters }) => ({
    ...state,
    loader: false,
    chapters,
  })),
  on(selectChapter, (state, { chapter }) => ({
    ...state,
    loader: false,
    chapter,
  }))
);

export function managersReducer(
  state: ManagersState | undefined,
  action: Action
) {
  return reducer(state, action);
}
