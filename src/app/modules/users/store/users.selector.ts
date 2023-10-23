import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.state';

export const usersFeatureKey = 'users';

export const state = createFeatureSelector<UsersState>(usersFeatureKey);

export const stories = createSelector(state, (state) => state.stories);
export const story = createSelector(state, (state) => state.story);
export const storyLoader = createSelector(state, (state) => state.storyLoader);
export const storiesLoader = createSelector(
  state,
  (state) => state.storiesLoader
);
export const userStatisticLoader = createSelector(
  state,
  (state) => state.userStatisticLoader
);
export const userStatistic = createSelector(
  state,
  (state) => state.userStatistic
);
export const categories = createSelector(state, (state) => state.categories);
export const categoriesLoader = createSelector(
  state,
  (state) => state.categoriesLoader
);
export const moneyBoxes = createSelector(state, (state) => state.moneyBoxes);
export const moneyBoxesLoader = createSelector(
  state,
  (state) => state.moneyBoxesLoader
);
export const transactions = createSelector(
  state,
  (state) => state.transactionsInfo.transactions
);
export const transactionsLoader = createSelector(
  state,
  (state) => state.transactionsInfo.loader
);
export const childrens = createSelector(
  state,
  (state) => state.childrensInfo.childrens
);
export const childrensLoader = createSelector(
  state,
  (state) => state.childrensInfo.loader
);
export const childrenStatistics = createSelector(
  state,
  (state) => state.childrensInfo.statistics
);
export const childrenLoaderStatistics = createSelector(
  state,
  (state) => state.childrensInfo.loaderStatistics
);
export const userInfo = createSelector(state, (state) => state.userInfo);
export const loaderUserInfo = createSelector(
  state,
  (state) => state.userInfo.loader
);
export const awards = createSelector(state, (state) => state.awardsInfo.awards);
export const awardsLoader = createSelector(
  state,
  (state) => state.awardsInfo.loader
);
