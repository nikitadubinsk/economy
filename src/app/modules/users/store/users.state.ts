import { IStory, IStoryInfo } from "src/app/models";
import { IUserStatistics } from "../models/statistics.model";
import { ITransactionInfo } from "../models/transaction.model";

export interface UsersState {
    stories: IStoryInfo[];
    story: IStory | null;
    storyLoader: boolean;
    storiesLoader: boolean;
    userStatisticLoader: boolean;
    userStatistic: IUserStatistics | null;
    transaction: ITransactionInfo[]
}

export const initialState: UsersState = {
    stories: [],
    story: null,
    storyLoader: false,
    storiesLoader: false,
    userStatisticLoader: false,
    userStatistic: null,
    transaction: []
};
