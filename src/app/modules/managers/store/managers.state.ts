import { IManagerChapter, IStoryManagerInfo } from 'src/app/models';
import { IStoryFilters } from '../models/filters.model';

export interface ManagersState {
  stories: IStoryManagerInfo[];
  story: IStoryManagerInfo | null;
  chapters: IManagerChapter[];
  loader: boolean;
  loaderButton: boolean;
  isChangeEntity: boolean;
  storyFilters: Partial<IStoryFilters>;
  chapter: IManagerChapter | null;
  storyId: number;
}

export const initialState: ManagersState = {
  stories: [],
  story: null,
  chapters: [],
  loader: false,
  loaderButton: false,
  isChangeEntity: false,
  storyFilters: {},
  chapter: null,
  storyId: 0,
};
