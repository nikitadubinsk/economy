import { IManagerChapter, IStoryInfo, IStoryManagerInfo } from 'src/app/models';
import { IStoryFilters } from '../models/filters.model';

export interface ManagersState {
  stories: IStoryManagerInfo[];
  chapters: IManagerChapter[];
  loader: boolean;
  isChangeEntity: boolean;
  storyFilters: Partial<IStoryFilters>;
}

export const initialState: ManagersState = {
  stories: [],
  chapters: [],
  loader: false,
  isChangeEntity: false,
  storyFilters: {},
};
