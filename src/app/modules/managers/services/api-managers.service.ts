import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IManagerChapter, IStoryManagerInfo } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';
import { IStoryFilters } from '../models/filters.model';
import { IChapterCreate } from '../models/chapter.model';

@Injectable({
  providedIn: 'root',
})
export class ApiManagerService extends ApiService {
  endpoints = {
    managers: '/manager/stories',
    storyById: '/manager/story/:id',
    story: '/manager/story',
    hideStory: '/manager/story/:id/hide',
    hideChapter: '/manager/chapter/:id/hide',
    chapters: '/manager/chapters/:id',
    chapterById: '/manager/chapter/:id',
    changeStoryWeight: '/manager/story/change-weight',
  };

  getStories(filters: Partial<IStoryFilters>): Observable<IStoryManagerInfo[]> {
    return this.get<IStoryManagerInfo[], Partial<IStoryFilters>>(
      this.endpoints.managers,
      filters
    ).pipe(map((d) => d.data));
  }

  getStory(id: number): Observable<IStoryManagerInfo> {
    return this.get<IStoryManagerInfo>(this.endpoints.storyById, { id }).pipe(
      map((d) => d.data)
    );
  }

  editStory(
    id: number,
    title: string,
    category: number,
    active: boolean,
    img: string
  ): Observable<void> {
    return this.put<
      void,
      {
        title: string;
        category: number;
        active: boolean;
        img: string;
      },
      { id: number }
    >(this.endpoints.storyById, { title, category, active, img }, { id }).pipe(
      map((d) => d.data)
    );
  }

  createStory(
    title: string,
    category: number,
    active: boolean,
    img: string
  ): Observable<void> {
    return this.post<
      void,
      {
        title: string;
        category: number;
        active: boolean;
        img: string;
      }
    >(this.endpoints.story, {
      title,
      category,
      active,
      img,
    }).pipe(map((d) => d.data));
  }

  changeWeight(stories: { id: number; weight: number }[]): Observable<void> {
    return this.put<void, { id: number; weight: number }[]>(
      this.endpoints.changeStoryWeight,
      stories
    ).pipe(map((d) => d.data));
  }

  deleteStory(id: number): Observable<void> {
    return this.delete<void, { id: number }>(this.endpoints.storyById, {
      id,
    }).pipe(map((d) => d.data));
  }

  activeStory(id: number, active: boolean): Observable<void> {
    return this.put<void, { active: boolean }, { id: number }>(
      this.endpoints.hideStory,
      { active },
      { id }
    ).pipe(map((d) => d.data));
  }

  getChapters(id: number): Observable<IManagerChapter[]> {
    return this.get<IManagerChapter[]>(this.endpoints.chapters, { id }).pipe(
      map((d) => d.data)
    );
  }

  activeChapter(id: number, active: boolean): Observable<void> {
    return this.put<void, { active: boolean }, { id: number }>(
      this.endpoints.hideChapter,
      { active },
      { id }
    ).pipe(map((d) => d.data));
  }

  deleteChapter(id: number): Observable<void> {
    return this.delete<void, { id: number }>(this.endpoints.chapterById, {
      id,
    }).pipe(map((d) => d.data));
  }

  getChapterById(id: number): Observable<IManagerChapter> {
    return this.get<IStoryManagerInfo, { id: number }>(
      this.endpoints.chapterById,
      { id }
    ).pipe(map((d) => d.data));
  }

  createChapter(chapter: IChapterCreate, storyId: number): Observable<void> {
    return this.post<void, IChapterCreate, { id: number }>(
      this.endpoints.chapters,
      chapter,
      { id: storyId }
    ).pipe(map((d) => d.data));
  }

  editChapter(chapter: IChapterCreate, id: number): Observable<void> {
    return this.put<void, IChapterCreate, { id: number }>(
      this.endpoints.chapterById,
      chapter,
      { id }
    ).pipe(map((d) => d.data));
  }
}
