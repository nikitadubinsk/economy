import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiAdminService } from '../services/api-admin.service';
import {
  activeRate,
  createRate,
  loadRateById,
  loadRates,
  loadStatistics,
  loadedRateById,
  loadedRates,
  turnOffLoading,
  updateRate,
} from './admin.actions';
import {
  navigateTo,
  showErrorMessage,
  showSuccessMessage,
} from 'src/app/store';

@Injectable()
export class AdminEffects {
  constructor(
    private readonly store$: Store,
    private readonly actions$: Actions,
    private readonly apiAdminService: ApiAdminService
  ) {}

  loadStatistics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStatistics),
      switchMap(() =>
        this.apiAdminService
          .getStatistics()
          .pipe(map(() => showSuccessMessage({})))
      )
    )
  );

  loadRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRates),
      switchMap(() =>
        this.apiAdminService.getRates().pipe(
          map((rates) => loadedRates({ rates })),
          catchError(() => [loadedRates({ rates: [] })])
        )
      )
    )
  );

  loadRateById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRateById),
      switchMap(({ id }) =>
        this.apiAdminService.getRatById(id).pipe(
          map((rate) => loadedRateById({ rate })),
          catchError(() => [
            showErrorMessage({
              message: 'Попробуйте повторить через 5 минут или позже',
              options: { label: 'Не удалось получить данный тариф' },
            }),
            navigateTo({ payload: { path: ['/admin/rates'] } }),
          ])
        )
      )
    )
  );

  activeRate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activeRate),
      switchMap(({ active, id }) =>
        this.apiAdminService.closeRate(active, id).pipe(
          switchMap(() => [
            loadRates(),
            showSuccessMessage({
              message: 'Вы успешно изменили статус активности тарифа',
            }),
          ]),
          catchError(() => [
            showErrorMessage({
              message: 'Попробуйте повторить через 5 минут или позже',
              options: { label: 'Не удалось изменить статус данного тарифа' },
            }),
          ])
        )
      )
    )
  );

  updateRate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateRate),
      switchMap(({ id, rate }) =>
        this.apiAdminService.editRate(rate, id).pipe(
          switchMap(() => [
            turnOffLoading(),
            navigateTo({ payload: { path: ['/admin/rates'] } }),
            showSuccessMessage({
              message: `Вы успешно обновилии тариф ${rate.name}`,
            }),
          ]),
          catchError(() => [
            showErrorMessage({
              message: 'Попробуйте повторить через 5 минут или позже',
              options: { label: 'Не удалось изменить данный тариф' },
            }),
          ])
        )
      )
    )
  );

  createRate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createRate),
      switchMap(({ rate }) =>
        this.apiAdminService.addRate(rate).pipe(
          switchMap(() => [
            turnOffLoading(),
            navigateTo({ payload: { path: ['/admin/rates'] } }),
            showSuccessMessage({
              message: `Вы успешно добавили тариф ${rate.name}`,
            }),
          ]),
          catchError(() => [
            showErrorMessage({
              message: 'Попробуйте повторить через 5 минут или позже',
              options: { label: 'Не удалось создать новый тариф' },
            }),
          ])
        )
      )
    )
  );
}
