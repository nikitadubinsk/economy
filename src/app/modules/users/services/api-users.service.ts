import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {
  IApiResponse,
  IHttpPageMetaData,
  ISimpleItem,
  IStory,
  IStoryInfo,
} from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';
import {
  IChildrenStatistics,
  IUserStatistics,
} from '../models/statistics.model';
import {
  ITransaction,
  ITransactionFilter,
  ITransactionForm,
} from '../models/transaction.model';
import { IMoneyBox, IMoneyBoxCreate } from '../models/moneyBox.model';
import { ACTIONS } from '../consts/action.const';
import { IChildren } from '../models/children.model';
import { mockChildren } from '../mocks/children.mock';
import { mockChildrenStatistics } from '../mocks/children-statistics.mock';
import { IAward } from '../models/awards.model';
import { mockAwards } from '../mocks/awards.mock';

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
    moneyBoxById: '/users/money-box/:id',
    moneyBox: '/users/money-box',
    childrens: '/users/childrens',
    receipt: '/users/receipt',
    childrenStatistics: '/users/childrens/statistics/:id',
    awards: '/users/awards',
    transactionById: '/users/transaction/:id',
    fullUserInfo: '/users/full-info',
  };

  getStories(): Observable<IStoryInfo[]> {
    return this.get<IStoryInfo[]>(this.endpoints.stories).pipe(
      map((d) => d.data)
    );
  }

  getStoryById(id: number): Observable<IStory> {
    return this.get<IStory, { id: number }>(this.endpoints.storyById, {
      id,
    }).pipe(map((d) => d.data));
  }

  getUserStatistic(from?: string, to?: string): Observable<IUserStatistics> {
    return this.get<IUserStatistics, { from?: string; to?: string }>(
      this.endpoints.statistic,
      { from, to }
    ).pipe(map((d) => d.data));
  }

  getTransaction(
    filter: Partial<ITransactionFilter>
  ): Observable<IApiResponse<ITransaction[], IHttpPageMetaData>> {
    return this.get<
      ITransaction[],
      Partial<ITransactionFilter>,
      IHttpPageMetaData
    >(this.endpoints.transactions, { ...filter });
  }

  getCategories(): Observable<ISimpleItem[]> {
    return this.get<ISimpleItem[]>(this.endpoints.categories).pipe(
      map((d) => d.data)
    );
  }

  getMoneyBoxes(): Observable<IMoneyBox[]> {
    return this.get<IMoneyBox[]>(this.endpoints.moneyBoxes).pipe(
      map((d) => d.data)
    );
  }

  deleteMoneyBox(id: number): Observable<void> {
    return this.delete<void, { id: number }>(this.endpoints.moneyBoxById, {
      id,
    }).pipe(map((d) => d.data));
  }

  createTransaction(transaction: ITransactionForm): Observable<void> {
    return this.post<void, ITransactionForm>(
      this.endpoints.transaction,
      transaction
    ).pipe(map((d) => d.data));
  }

  editMoneyBox(action: ACTIONS, id: number, sum: number): Observable<void> {
    return this.post<void, { action: ACTIONS; sum: number }, { id: number }>(
      this.endpoints.moneyBoxById,
      { action, sum },
      { id }
    ).pipe(map((d) => d.data));
  }

  getChildrens(): Observable<IChildren[]> {
    return this.get<IChildren[]>(this.endpoints.childrens).pipe(
      map((d) => d.data)
    );
  }

  addReceipt(sum: number): Observable<void> {
    return this.post<void, { sum: number }>(this.endpoints.receipt, {
      sum,
    }).pipe(map((d) => d.data));
  }

  getChildrenStatistics(id: number): Observable<IChildrenStatistics> {
    return this.get<IChildrenStatistics, { id: number }>(
      this.endpoints.childrenStatistics,
      { id }
    ).pipe(map((d) => d.data));
  }

  deleteChildren(id: number): Observable<void> {
    return of(undefined).pipe(delay(500));
    //return this.delete<IChildrenStatistics, {id: number}>(this.endpoints.childrenStatistics, {id}).pipe(map(d => d.data));
  }

  getUserInfo(): Observable<{ email: string; date: string; photo?: string }> {
    return this.get<{ email: string; date: string; photo?: string }>(
      this.endpoints.fullUserInfo
    ).pipe(map((d) => d.data));
  }

  getAwards(): Observable<IAward[]> {
    return of(mockAwards).pipe(delay(1200));
    //return this.get<IAward[]>(this.endpoints.awards).pipe(map(d => d.data));
  }

  createMoneyBox(moneyBox: IMoneyBoxCreate): Observable<void> {
    return this.post<void, IMoneyBoxCreate>(
      this.endpoints.moneyBox,
      moneyBox
    ).pipe(map((d) => d.data));
  }

  deleteTransaction(id: number): Observable<void> {
    return this.delete<void, { id: number }>(this.endpoints.transactionById, {
      id,
    }).pipe(map((d) => d.data));
  }
}
