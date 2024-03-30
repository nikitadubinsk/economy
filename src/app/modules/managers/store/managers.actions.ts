import { createAction, props } from '@ngrx/store';
import { managersFeatureKey } from './managers.selector';
import {
  IManagerChapter,
  ISimpleItem,
  IStoryManagerInfo,
} from 'src/app/models';
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
export const loadStoryById = createAction(
  `[${managersFeatureKey}] LOAD_STORY_BY_ID`,
  props<{
    id: number;
  }>()
);
export const loadedStoryById = createAction(
  `[${managersFeatureKey}] LOADED_STORY_BY_ID`,
  props<{
    story: IStoryManagerInfo;
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
    id: number;
    title: string;
    category: number;
    active: boolean;
    img: string;
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
export const loadChapterById = createAction(
  `[${managersFeatureKey}] LOAD_CHAPTER_BY_ID`,
  props<{
    id: number;
  }>()
);
export const loadedChapterById = createAction(
  `[${managersFeatureKey}] LOADED_CHAPTER_BY_ID`,
  props<{
    chapter: IManagerChapter;
  }>()
);
export const resetChapter = createAction(
  `[${managersFeatureKey}] RESET_CHAPTER`
);
export const resetStory = createAction(`[${managersFeatureKey}] RESET_STORY`);
export const createStory = createAction(
  `[${managersFeatureKey}] CREATE_STORY`,
  props<{
    title: string;
    category: number;
    active: boolean;
    img: string;
  }>()
);
export const turnOffLoaderButton = createAction(
  `[${managersFeatureKey}] TURN_OFF_LOADER_BUTTON`
);
export const saveNewWeight = createAction(
  `[${managersFeatureKey}] SAVE_NEW_WEIGHT`
);
export const saveStoryId = createAction(
  `[${managersFeatureKey}] SAVE_STORY_ID`,
  props<{
    id: number;
  }>()
);
