import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ISimpleItem, IStory, IStoryInfo } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';
import { mockStories, mockStory, mockUserStatistic } from '../mocks/story.mock';
import { IUserStatistics } from '../models/statistics.model';
import { ITransaction, ITransactionFilter, ITransactionForm } from '../models/transaction.model';
import { mockUserTransaction } from '../mocks/transactions.mock';
import { mockCategories } from '../mocks/categories.mock';
import { IMoneyBox } from '../models/moneyBox.model';
import { mockMoneyBox } from '../mocks/moneyBox.mock';
import { ACTIONS } from '../consts/action.const';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService extends ApiService {
  endpoints = {
    stories: '/users/stories',
    storyById: '/users/story/:id',
    statistic: '/users/statistic',
    transactions: '/users/transactions',
    transaction: '/users/transaction',
    categories: '/users/categories',
    moneyBoxes: '/users/money-boxes',
    moneyBox: '/users/money-box/:id',
  };

  getStories(): Observable<IStoryInfo[]> {
    return of(mockStories).pipe(delay(900));
    //return this.get<IStoryInfo[]>(this.endpoints.stories).pipe(map(d => d.data));
  }

  getStoryById(id: number): Observable<IStory> {
    return of(mockStory).pipe(delay(900));
    //return this.get<IStory, {id: number}>(this.endpoints.storyById, {id}).pipe(map(d => d.data));
  }

  getUserStatistic(from: string, to: string): Observable<IUserStatistics> {
    return of(mockUserStatistic).pipe(delay(1000));
    //return this.get<IUserStatistics, {from: string, to: string}>(this.endpoints.statistic, {from, to}).pipe(map(d => d.data));
  }

  getTransaction(filter: Partial<ITransactionFilter>): Observable<ITransaction[]> {
    console.log(filter);
    
    return of(mockUserTransaction).pipe(delay(1500));
    //return this.get<ITransaction, {from: string, to: string}>(this.endpoints.statistic, {from, to}).pipe(map(d => d.data));
  }

  getCategories(): Observable<ISimpleItem[]> {
    return of(mockCategories).pipe(delay(500));
    //return this.get<ISimpleItem>(this.endpoints.categories).pipe(map(d => d.data));
  }

  getMoneyBoxes(): Observable<IMoneyBox[]> {
    return of(mockMoneyBox).pipe(delay(500));
    //return this.get<IMoneyBox>(this.endpoints.moneyBoxes).pipe(map(d => d.data));
  }

  deleteMoneyBox(id: number): Observable<void> {
    return of(undefined).pipe(delay(500));
    //return this.delete<void, {id: number}>(this.endpoints.moneyBox, {id}).pipe(map(d => d.data));
  }

  createTransaction(transaction: ITransactionForm): Observable<void> {
    return of(undefined).pipe(delay(500));
    //return this.post<void, {id: number}>(this.endpoints.transaction, {id}).pipe(map(d => d.data));
  }

  editMoneyBox(action: ACTIONS, id: number, sum: number): Observable<void> {
    //return of(undefined).pipe(delay(500));
    return this.post<void, {id: number}, {action: ACTIONS, sum: number}>(this.endpoints.moneyBox, {id}, {action, sum}).pipe(map(d => d.data));
  }
}