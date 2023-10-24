import { IManagerChapter, IStoryInfo, IStoryManagerInfo } from 'src/app/models';

export interface ManagersState {
  stories: IStoryManagerInfo[];
  chapters: IManagerChapter[];
  loader: boolean;
  isChangeEntity: boolean;
}

export const initialState: ManagersState = {
  stories: [],
  chapters: [],
  loader: false,
  isChangeEntity: false,
};
