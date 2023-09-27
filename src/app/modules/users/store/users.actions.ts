import {createAction, props} from '@ngrx/store';
import {usersFeatureKey} from './users.selector';
import { ISimpleItem, IStory, IStoryInfo } from 'src/app/models';
import { IUserStatistics } from '../models/statistics.model';
import { IMoneyBox } from '../models/moneyBox.model';
import { ITransaction, ITransactionFilter, ITransactionForm } from '../models/transaction.model';
import { ACTIONS } from '../consts/action.const';

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
export const loadTransactionCategories = createAction(
    `[${usersFeatureKey}] LOAD_TRANSACTION_CATEGORIES`
);
export const loadedTransactionCategories = createAction(
    `[${usersFeatureKey}] LOADED_TRANSACTION_CATEGORIES`, props<{
        categories: ISimpleItem[];
    }>()
);
export const loadMoneyBoxes = createAction(
    `[${usersFeatureKey}] LOAD_MONEY_BOXES`
);
export const loadedMoneyBoxes = createAction(
    `[${usersFeatureKey}] LOADED_MONEY_BOXES`, props<{
        moneyBoxes: IMoneyBox[];
    }>()
);
export const deleteMoneyBox = createAction(
    `[${usersFeatureKey}] DELETE_MONEY_BOX`, props<{
        id: number;
    }>()
);
export const createTransaction = createAction(
    `[${usersFeatureKey}] CREATE_TRANSACTION`, props<{
        transaction: ITransactionForm;
    }>()
);
export const editMoneyBox = createAction(
    `[${usersFeatureKey}] EDIT_MONEY_BOX`, props<{
        id: number;
        action: ACTIONS
    }>()
);
export const loadTransactions = createAction(
    `[${usersFeatureKey}] LOAD_TRANSACTIONS`,
    props<{
        filter: Partial<ITransactionFilter>;
    }>()
);
export const loadedTransactions = createAction(
    `[${usersFeatureKey}] LOADED_TRANSACTIONS`, props<{
        transactions: ITransaction[];
    }>()
);