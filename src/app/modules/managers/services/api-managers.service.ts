import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IManagerChapter, IStoryManagerInfo } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';
import { mockManagerChapters, mockManagerStories } from '../mocks/story.mock';
import { IStoryFilters } from '../models/filters.model';

@Injectable({
  providedIn: 'root',
})
export class ApiManagerService extends ApiService {
  endpoints = {
    managers: '/manager/stories',
    story: '/manager/story/:id',
  };

  getStories(filters: Partial<IStoryFilters>): Observable<IStoryManagerInfo[]> {
    //return this.get<IStoryManagerInfo[], Partial<IStoryFilters>>(this.endpoints.managers, filters).pipe(map(d => d.data));
    return of(mockManagerStories).pipe(delay(2000));
  }

  getStory(id: number): Observable<IStoryManagerInfo> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(mockManagerStories[0]).pipe(delay(2000));
  }

  editStory(
    id: number,
    title: string,
    category: number,
    active: boolean,
    img: string
  ): Observable<void> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(undefined).pipe(delay(1000));
  }

  createStory(
    title: string,
    category: number,
    active: boolean,
    img: string
  ): Observable<void> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(undefined).pipe(delay(1000));
  }

  changeWeight(stories: { id: number; weight: number }[]): Observable<void> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(undefined).pipe(delay(1000));
  }

  deleteStory(id: number): Observable<void> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(undefined).pipe(delay(1000));
  }

  activeStory(id: number, active: boolean): Observable<void> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(undefined).pipe(delay(500));
  }

  getChapters(id: number): Observable<IManagerChapter[]> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(mockManagerChapters).pipe(delay(2000));
  }

  activeChapter(id: number, active: boolean): Observable<void> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(undefined).pipe(delay(500));
  }

  deleteChapter(id: number): Observable<void> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(undefined).pipe(delay(1000));
  }

  getChapterById(id: number): Observable<IManagerChapter> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(mockManagerChapters[id - 1]).pipe(delay(1000));
  }
}
