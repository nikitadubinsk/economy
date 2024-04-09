import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { ICreateRate, IRate } from '../models/rates.model';

@Injectable({
  providedIn: 'root',
})
export class ApiAdminService extends ApiService {
  endpoints = {
    statistics: '/admin/statistics',
    rates: '/admin/rates',
    rateById: '/admin/rate/:id',
    rate: '/admin/rate',
    closeRate: '/admin/rate/:id/hide',
  };

  getStatistics(): Observable<void> {
    // return this.get<void>(this.endpoints.statistics).pipe(map(d => d.data));
    return of(undefined).pipe(delay(1000));
  }

  getRates(): Observable<IRate[]> {
    return this.get<IRate[]>(this.endpoints.rates).pipe(map((d) => d.data));
  }

  getRatById(id: number): Observable<IRate> {
    return this.get<IRate>(this.endpoints.rateById, { id }).pipe(
      map((d) => d.data)
    );
  }

  addRate(rate: ICreateRate): Observable<void> {
    return this.post<void, ICreateRate>(this.endpoints.rate, rate).pipe(
      map((d) => d.data)
    );
  }

  editRate(rate: ICreateRate, id: number): Observable<void> {
    return this.put<void, ICreateRate, { id: number }>(
      this.endpoints.rateById,
      rate,
      { id }
    ).pipe(map((d) => d.data));
  }

  closeRate(active: boolean, id: number): Observable<void> {
    return this.post<void, { active: boolean }>(
      this.endpoints.closeRate,
      { active },
      { id }
    ).pipe(map((d) => d.data));
  }
}
