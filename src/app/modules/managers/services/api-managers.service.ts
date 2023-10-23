import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IStoryInfo } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';
import { mockStories } from '../../users/mocks/story.mock';

@Injectable({
  providedIn: 'root',
})
export class ApiManagerService extends ApiService {
  endpoints = {
    managers: '/manager/stories',
  };

  getStories(): Observable<IStoryInfo[]> {
    // return this.get<IStoryInfo[]>(this.endpoints.managers).pipe(map(d => d.data));
    return of(mockStories).pipe(delay(2000));
  }
}
