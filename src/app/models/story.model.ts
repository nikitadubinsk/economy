export interface IStoryInfo {
    id: number;
    title: string;
    img: string;
    isViewed: boolean;
    count: number;
}

export interface IStory extends IStoryInfo {
    chapter: IChapter[];
}

export interface IChapter {
    id: number;
    title: string;
    text: string;
    img: string;
    isViewed: boolean;
}