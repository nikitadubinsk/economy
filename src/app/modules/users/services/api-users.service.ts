import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import { IStory, IStoryInfo } from 'src/app/models';
import {ApiService} from 'src/app/services/api.service';
import { mockStories, mockStory, mockUserStatistic } from '../mocks/story.mock';
import { IUserStatistics } from '../models/statistics.model';

@Injectable({
    providedIn: 'root',
})
export class ApiUsersService extends ApiService {
    endpoints = {
        stories: '/users/stories',
        storyById: '/users/story/:id',
        statistic: '/users/statistic'
    };

    getStories(): Observable<IStoryInfo[]> {
        return of(mockStories).pipe(delay(900))
        //return this.get<IStoryInfo[]>(this.endpoints.stories).pipe(map(d => d.data));
    }

    getStoryById(id: number): Observable<IStory> {
        return of(mockStory).pipe(delay(900))
        //return this.get<IStory, {id: number}>(this.endpoints.storyById, {id}).pipe(map(d => d.data));
    }

    getUserStatistic(from: string, to: string): Observable<IUserStatistics> {
        return of(mockUserStatistic).pipe(delay(1000))
        //return this.get<IUserStatistics, {from: string, to: string}>(this.endpoints.statistic, {from, to}).pipe(map(d => d.data));
    }
}
