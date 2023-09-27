import { ISimpleItem, IStory, IStoryInfo } from "src/app/models";
import { IUserStatistics } from "../models/statistics.model";
import { ITransaction, ITransactionFilter } from "../models/transaction.model";
import { IMoneyBox } from "../models/moneyBox.model";

export interface UsersState {
    stories: IStoryInfo[];
    story: IStory | null;
    storyLoader: boolean;
    storiesLoader: boolean;
    userStatisticLoader: boolean;
    userStatistic: IUserStatistics | null;
    categoriesLoader: boolean;
    transactionsInfo: {
        transactions: ITransaction[];
        page: number;
        filter: Partial<ITransactionFilter>;
        loader: boolean;
    }
    categories: ISimpleItem[];
    moneyBoxes: IMoneyBox[];
    moneyBoxesLoader: boolean;
    name: string | null;
}

export const initialState: UsersState = {
    stories: [],
    story: null,
    storyLoader: false,
    storiesLoader: false,
    userStatisticLoader: false,
    categoriesLoader: false,
    userStatistic: null,
    transactionsInfo: {
        transactions: [],
        page: 0,
        filter: {},
        loader: false,
    },
    categories: [],
    moneyBoxes: [],
    moneyBoxesLoader: false,
    name: null,
};