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
