import {createAction, props} from '@ngrx/store';
import {usersFeatureKey} from './users.selector';
import { IStory, IStoryInfo } from 'src/app/models';
import { IUserStatistics } from '../models/statistics.model';

export const loadStories = createAction(
    `[${usersFeatureKey}] LOAD_STORIES`
);

export const loadedStories = createAction(
    `[${usersFeatureKey}] LOADED_STORIES`,
    props<{
        stories: IStoryInfo[];
    }>()
);


export const openStory = createAction(
    `[${usersFeatureKey}] OPEN_STORY`,
    props<{
        id: number;
    }>()
);

export const openCreateNewTransactionPopup = createAction(
    `[${usersFeatureKey}] OPEN_CREATE_NEW_TRANSACTION_POPUP`,
);

export const loadStoryById = createAction(
    `[${usersFeatureKey}] LOAD_STORY_BY_ID`,
    props<{
        id: number;
    }>()
);

export const loadedStoryById = createAction(
    `[${usersFeatureKey}] LOADED_STORY_BY_ID`,
    props<{
        story: IStory;
    }>()
);
export const clearStory = createAction(
    `[${usersFeatureKey}] CLEAR_STORY`
);
export const loadUserStatistic = createAction(
    `[${usersFeatureKey}] LOAD_USER_STATISTIC`,
    props<{
        from: string;
        to: string
    }>()
);
export const loadedUserStatistic = createAction(
    `[${usersFeatureKey}] LOADED_USER_STATISTIC`, props<{
        statistic: IUserStatistics;
    }>()
);