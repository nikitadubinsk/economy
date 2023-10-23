import { IStoryInfo } from 'src/app/models';

export interface ManagersState {
  stories: IStoryInfo[];
  storiesLoader: boolean;
}

export const initialState: ManagersState = {
  stories: [],
  storiesLoader: false,
};
