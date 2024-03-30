import { EChapterType } from '../consts/chapter-type.const';

export interface IChapterCreate {
  title: string;
  description?: string;
  type: EChapterType;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  active: boolean;
  img: string;
}

export interface IChapterEdit extends IChapterCreate {
  id: number;
}
