import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UsersState} from './users.state';

export const usersFeatureKey = 'users';

export const state = createFeatureSelector<UsersState>(usersFeatureKey);

export const stories = createSelector(state, state => state.stories);
export const story = createSelector(state, state => state.story);
export const storyLoader = createSelector(state, state => state.storyLoader);
export const storiesLoader = createSelector(state, state => state.storiesLoader);
export const userStatisticLoader = createSelector(state, state => state.userStatisticLoader);
export const userStatistic = createSelector(state, state => state.userStatistic);