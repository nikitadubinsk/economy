import {Action, createReducer, on} from '@ngrx/store';
import { clearStory, loadMoneyBoxes, loadStories, loadStoryById, loadTransactionCategories, loadTransactions, loadUserStatistic, loadedMoneyBoxes, loadedStories, loadedStoryById, loadedTransactionCategories, loadedTransactions, loadedUserStatistic } from './users.actions';
import {initialState, UsersState} from './users.state';

const reducer = createReducer(
    initialState,
    on(loadStories, (state) => ({
        ...state,
        storiesLoader: true
    })),
    on(loadedStories, (state, {stories}) => ({
        ...state,
        stories,
        storiesLoader: false
    })),
    on(loadTransactions, (state) => ({
        ...state,
        transactionsInfo: {
            ...state.transactionsInfo,
            loader: true
        }
    })),
    on(loadedTransactions, (state, {transactions}) => ({
        ...state,
        transactionsInfo: {
            ...state.transactionsInfo,
            transactions,
            loader: false
        }
    })),
    on(loadStoryById, (state) => ({
        ...state,
        storyLoader: true
    })),
    on(loadedStoryById, (state, {story}) => ({
        ...state,
        story,
        storyLoader: false
    })),
    on(clearStory, (state) => ({
        ...state,
        story: null,
    })),
    on(loadUserStatistic, (state) => ({
        ...state,
        userStatisticLoader: true,
    })),
    on(loadedUserStatistic, (state, {statistic}) => ({
        ...state,
        userStatisticLoader: false,
        userStatistic: statistic
    })),
    on(loadTransactionCategories, (state) => ({
        ...state,
        categoriesLoader: true,
    })),
    on(loadedTransactionCategories, (state, {categories}) => ({
        ...state,
        categoriesLoader: false,
        categories
    })),
    on(loadMoneyBoxes, (state) => ({
        ...state,
        moneyBoxesLoader: true,
    })),
    on(loadedMoneyBoxes, (state, {moneyBoxes}) => ({
        ...state,
        moneyBoxesLoader: false,
        moneyBoxes
    })),
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return reducer(state, action);
}
