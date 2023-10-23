import { createAction, props } from '@ngrx/store';
import { managersFeatureKey } from './managers.selector';
import { IStoryInfo } from 'src/app/models';

export const loadStories = createAction(`[${managersFeatureKey}] LOAD_STORIES`);
export const loadedStories = createAction(
  `[${managersFeatureKey}] LOADED_STATISTICS`,
  props<{
    stories: IStoryInfo[];
  }>()
);
