import { Action, createReducer, on } from '@ngrx/store';
import { ManagersState, initialState } from './managers.state';
import {
  changeWeightStoriesSuccess,
  createChapter,
  createStory,
  editChapter,
  editStory,
  loadChapterById,
  loadChapters,
  loadStories,
  loadStoryById,
  loadedChapterById,
  loadedChapters,
  loadedStories,
  loadedStoryById,
  resetChapter,
  resetStory,
  saveNewWeight,
  saveStoryId,
  turnOffLoaderButton,
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
  // on(selectChapter, (state, { chapter }) => ({
  //   ...state,
  //   loader: false,
  //   chapter,
  // }))
  on(loadChapterById, (state) => ({
    ...state,
    loader: true,
  })),
  on(loadedChapterById, (state, { chapter }) => ({
    ...state,
    loader: false,
    chapter,
  })),
  on(loadStoryById, (state) => ({
    ...state,
    loader: true,
  })),
  on(loadedStoryById, (state, { story }) => ({
    ...state,
    loader: false,
    story,
  })),
  on(resetChapter, (state) => ({
    ...state,
    chapter: null,
  })),
  on(resetStory, (state) => ({
    ...state,
    story: null,
  })),
  on(createStory, (state) => ({
    ...state,
    loaderButton: true,
  })),
  on(createChapter, (state) => ({
    ...state,
    loaderButton: true,
  })),
  on(editChapter, (state) => ({
    ...state,
    loaderButton: true,
  })),
  on(editStory, (state) => ({
    ...state,
    loaderButton: true,
  })),
  on(saveNewWeight, (state) => ({
    ...state,
    loaderButton: true,
  })),
  on(turnOffLoaderButton, (state) => ({
    ...state,
    loaderButton: false,
  })),
  on(saveStoryId, (state, { id }) => ({
    ...state,
    storyId: id,
  }))
);

export function managersReducer(
  state: ManagersState | undefined,
  action: Action
) {
  return reducer(state, action);
}
