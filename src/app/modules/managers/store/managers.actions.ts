import { createAction, props } from '@ngrx/store';
import { managersFeatureKey } from './managers.selector';
import { IManagerChapter, IStoryManagerInfo } from 'src/app/models';
import { IStoryFilters } from '../models/filters.model';
import { TuiFileLike } from '@taiga-ui/kit';

export const loadStories = createAction(
  `[${managersFeatureKey}] LOAD_STORIES`,
  props<{
    filters: Partial<IStoryFilters>;
  }>()
);
export const loadedStories = createAction(
  `[${managersFeatureKey}] LOADED_STATISTICS`,
  props<{
    stories: IStoryManagerInfo[];
  }>()
);
export const changeWeightStories = createAction(
  `[${managersFeatureKey}] CHANGE_WEIGHT_STORIES`,
  props<{
    indexFrom: number;
    indexTo: number;
  }>()
);
export const changeWeightStoriesSuccess = createAction(
  `[${managersFeatureKey}] CHANGE_WEIGHT_STORIES_SUCCESS`,
  props<{
    stories: IStoryManagerInfo[];
  }>()
);
export const deleteStory = createAction(
  `[${managersFeatureKey}] DELETE_STORY`,
  props<{
    id: number;
  }>()
);
export const editStory = createAction(
  `[${managersFeatureKey}] EDIT_STORY`,
  props<{
    story: IStoryManagerInfo;
  }>()
);
export const activeStory = createAction(
  `[${managersFeatureKey}] ACTIVE_STORY`,
  props<{
    id: number;
    active: boolean;
  }>()
);
export const loadChapters = createAction(
  `[${managersFeatureKey}] LOAD_CHAPTERS`,
  props<{
    id: number;
  }>()
);
export const loadedChapters = createAction(
  `[${managersFeatureKey}] LOADED_CHAPTERS`,
  props<{
    chapters: IManagerChapter[];
  }>()
);
export const activeChapter = createAction(
  `[${managersFeatureKey}] ACTIVE_CHAPTER`,
  props<{
    id: number;
    active: boolean;
  }>()
);
export const selectChapter = createAction(
  `[${managersFeatureKey}] SELECT_CHAPTER`,
  props<{
    id: number;
  }>()
);
export const deleteChapter = createAction(
  `[${managersFeatureKey}] DELETE_CHAPTER`,
  props<{
    id: number;
  }>()
);
export const loadChapterImage = createAction(
  `[${managersFeatureKey}] LOAD_CHAPTER_IMAGE`,
  props<{
    file: TuiFileLike;
  }>()
);
