import { Action, createReducer, on } from '@ngrx/store';
import {
  clearStory,
  loadAwards,
  loadChildrenStatistics,
  loadChildrens,
  loadMoneyBoxes,
  loadStories,
  loadStoryById,
  loadTransactionCategories,
  loadTransactions,
  loadUser,
  loadUserStatistic,
  loadedAwards,
  loadedChildrenStatistics,
  loadedChildrens,
  loadedMoneyBoxes,
  loadedStories,
  loadedStoryById,
  loadedTransactionCategories,
  loadedTransactions,
  loadedUser,
  loadedUserStatistic,
} from './users.actions';
import { initialState, UsersState } from './users.state';

const reducer = createReducer(
  initialState,
  on(loadStories, (state) => ({
    ...state,
    storiesLoader: true,
  })),
  on(loadedStories, (state, { stories }) => ({
    ...state,
    stories,
    storiesLoader: false,
  })),
  on(loadTransactions, (state) => ({
    ...state,
    transactionsInfo: {
      ...state.transactionsInfo,
      loader: true,
    },
  })),
  on(loadedTransactions, (state, { transactions }) => ({
    ...state,
    transactionsInfo: {
      ...state.transactionsInfo,
      transactions,
      loader: false,
    },
  })),
  on(loadStoryById, (state) => ({
    ...state,
    storyLoader: true,
  })),
  on(loadedStoryById, (state, { story }) => ({
    ...state,
    story,
    storyLoader: false,
  })),
  on(clearStory, (state) => ({
    ...state,
    story: null,
  })),
  on(loadUserStatistic, (state) => ({
    ...state,
    userStatisticLoader: true,
  })),
  on(loadedUserStatistic, (state, { statistic }) => ({
    ...state,
    userStatisticLoader: false,
    userStatistic: statistic,
  })),
  on(loadTransactionCategories, (state) => ({
    ...state,
    categoriesLoader: true,
  })),
  on(loadedTransactionCategories, (state, { categories }) => ({
    ...state,
    categoriesLoader: false,
    categories,
  })),
  on(loadMoneyBoxes, (state) => ({
    ...state,
    moneyBoxesLoader: true,
  })),
  on(loadedMoneyBoxes, (state, { moneyBoxes }) => ({
    ...state,
    moneyBoxesLoader: false,
    moneyBoxes,
  })),
  on(loadChildrens, (state) => ({
    ...state,
    childrensInfo: {
      ...state.childrensInfo,
      loader: true,
    },
  })),
  on(loadedChildrens, (state, { childrens }) => ({
    ...state,
    childrensInfo: {
      ...state.childrensInfo,
      loader: false,
      childrens,
    },
  })),
  on(loadChildrenStatistics, (state) => ({
    ...state,
    childrensInfo: {
      ...state.childrensInfo,
      loaderStatistics: true,
    },
  })),
  on(loadedChildrenStatistics, (state, { statistics }) => ({
    ...state,
    childrensInfo: {
      ...state.childrensInfo,
      loaderStatistics: false,
      statistics,
    },
  })),
  on(loadUser, (state) => ({
    ...state,
    userInfo: {
      ...state.userInfo,
      loader: true,
    },
  })),
  on(loadedUser, (state, { email, date, photo }) => ({
    ...state,
    userInfo: {
      ...state.userInfo,
      loader: false,
      email,
      date,
      photo: photo || null,
    },
  })),
  on(loadAwards, (state) => ({
    ...state,
    awardsInfo: {
      ...state.awardsInfo,
      loader: true,
    },
  })),
  on(loadedAwards, (state, { awards }) => ({
    ...state,
    awardsInfo: {
      ...state.awardsInfo,
      loader: false,
      awards,
    },
  }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
