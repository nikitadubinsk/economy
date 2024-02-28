import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { ApiAuthService } from '../services/auth.service';
import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
  navigateTo,
  showInfoMessage,
  loadRates,
  loadUserInfo,
  loadedUserInfo,
  auth,
  setLS,
  logout,
  turnOffLoadingButton,
  updateUserInfo,
  loadUserPhoto,
  resetPassword,
} from './root.actions';

@Injectable()
export class RootEffects {
  constructor(
    private readonly alertService: AlertService,
    private readonly apiAuthService: ApiAuthService,
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly store$: Store
  ) {}

  showSuccessMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showSuccessMessage),
        map(({ message }) => this.alertService.showSuccessMessage(message))
      ),
    { dispatch: false }
  );

  showErrorMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showErrorMessage),
        map(({ message, options }) =>
          this.alertService.showErrorMessage(message, options)
        )
      ),
    { dispatch: false }
  );

  showWarringMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showWarningMessage),
        map(({ message }) => this.alertService.showWarningMessage(message))
      ),
    { dispatch: false }
  );

  showInfoMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showInfoMessage),
        map(({ message }) => this.alertService.showInfoMessage(message))
      ),
    { dispatch: false }
  );

  navigateTo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateTo),
        tap(({ payload }) => {
          this.router.navigate(payload.path, {
            queryParams: payload.queryParams,
          });
        })
      ),
    { dispatch: false }
  );

  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(auth),
      switchMap(({ login, password }) =>
        this.apiAuthService.authorize({ login, password }).pipe(
          switchMap(({ token }) => [
            setLS({ token }),
            loadUserInfo(),
            turnOffLoadingButton(),
          ]),
          catchError(() => [
            showErrorMessage({ message: 'Произошла ошибка' }),
            turnOffLoadingButton(),
          ])
        )
      )
    )
  );

  setLS$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setLS),
        tap(({ token }) => localStorage.setItem('token', token))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          localStorage.clear();
          this.store$.dispatch(navigateTo({ payload: { path: ['/auth'] } }));
        })
      ),
    { dispatch: false }
  );

  loadUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserInfo),
      switchMap(() =>
        this.apiAuthService.userInfo().pipe(
          switchMap(
            ({ name, role, operatorRoles, typeInformationPerception }) => [
              loadedUserInfo({ name, role, operatorRoles }),
              navigateTo({
                payload: {
                  path:
                    role === 'Менеджер' || role === 'Оператор'
                      ? ['/operators']
                      : role === 'Администратор'
                      ? ['/admin']
                      : typeInformationPerception
                      ? ['/users']
                      : ['/detail'],
                },
              }),
            ]
          ),
          catchError(() => [
            showErrorMessage({ message: 'Произошла ошибка' }),
            navigateTo({ payload: { path: ['/auth'] } }),
          ])
        )
      )
    )
  );

  loadUserPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserPhoto),
      switchMap(
        ({ photo, typeInformationPerception, description, telegramUserId }) =>
          this.apiAuthService.loadUserPhoto(photo).pipe(
            switchMap(({ name }) => [
              updateUserInfo({
                typeInformationPerception,
                description,
                telegramUserId,
                photo: name,
              }),
            ]),
            catchError(() => [
              showErrorMessage({
                message: 'Произошла небольшая ошибка, попробуйте еще раз',
              }),
            ])
          )
      )
    )
  );

  updateUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserInfo),
      switchMap(
        ({ photo, typeInformationPerception, description, telegramUserId }) =>
          this.apiAuthService
            .updateUserInfo(
              typeInformationPerception,
              description,
              telegramUserId,
              photo
            )
            .pipe(
              map((name) => loadUserInfo()),
              catchError(() => [
                showErrorMessage({ message: 'Произошла ошибка' }),
                navigateTo({ payload: { path: ['/auth'] } }),
              ])
            )
      )
    )
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetPassword),
      switchMap(({ login }) =>
        this.apiAuthService.resetPassword(login).pipe(
          switchMap(() => [
            navigateTo({ payload: { path: ['/auth'] } }),
            showSuccessMessage({
              message: 'Вы успешно сбросили пароль. Новый пароль уже на почте',
            }),
            turnOffLoadingButton(),
          ]),
          catchError(() => [
            showErrorMessage({ message: 'Произошла ошибка' }),
            navigateTo({ payload: { path: ['/auth'] } }),
            turnOffLoadingButton(),
          ])
        )
      )
    )
  );
}
