import { ISimpleItem, IStory, IStoryInfo } from "src/app/models";
import { IChildrenStatistics, IUserStatistics } from "../models/statistics.model";
import { ITransaction, ITransactionFilter } from "../models/transaction.model";
import { IMoneyBox } from "../models/moneyBox.model";
import { IChildren } from "../models/children.model";

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
    childrensInfo: {
        childrens: IChildren[];
        loader: boolean;
        statistics: IChildrenStatistics | null;
        loaderStatistics: boolean;
    };
    userInfo: {
        email: string | null;
        date: string | null
        photo: string | null;
        loader: boolean;
    }
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
    childrensInfo: {
        childrens: [],
        loader: false,
        statistics: null,
        loaderStatistics: false
    },
    userInfo: {
        email: null,
        date: null,
        photo: null,
        loader: false
    }
};
