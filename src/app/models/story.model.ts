import { ISimpleItem } from './simple-item.model';

export interface IStoryInfo {
  id: number;
  title: string;
  img: string;
  isViewed?: boolean;
  count: number;
  weight?: number;
}

export interface IStory extends IStoryInfo {
  chapter: IChapter[];
}

export interface IChapter {
  id: number;
  title?: string;
  text?: string;
  img: string;
  isViewed: boolean;
  question?: IQuestion;
}

export interface IQuestion {
  text: string;
  answers: string[];
  correctAnswer: number;
  answer: string;
}

export interface IStoryManagerInfo {
  id: number;
  title: string;
  img: string;
  weight: number;
  createdAt: string;
  category: ISimpleItem;
  active: boolean;
}

export interface IManagerChapter {
  id: number;
  title?: string;
  text?: string;
  img: string;
  question?: IQuestion;
  active: boolean;
  tariff?: string;
  createdAt: string;
}
