import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IManagerChapter, IStoryManagerInfo } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';
import { mockManagerChapters, mockManagerStories } from '../mocks/story.mock';

@Injectable({
  providedIn: 'root',
})
export class ApiManagerService extends ApiService {
  endpoints = {
    managers: '/manager/stories',
    story: '/manager/story/:id',
  };

  getStories(): Observable<IStoryManagerInfo[]> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(mockManagerStories).pipe(delay(2000));
  }

  deleteStory(id: number): Observable<void> {
    //return this.get<IStoryManagerInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(undefined).pipe(delay(1000));
  }

  editStory(id: number): Observable<void> {
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
}
