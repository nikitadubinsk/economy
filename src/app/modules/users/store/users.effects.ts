import { Inject, Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TuiDialogService } from '@taiga-ui/core';
import {
  addChildren,
  addReceipt,
  createMoneyBox,
  createTransaction,
  deleteChildren,
  deleteMoneyBox,
  editMoneyBox,
  loadAwards,
  loadChildrenStatistics,
  loadChildrens,
  loadMoneyBoxes,
  loadStories,
  loadStoryById,
  loadTransactionCategories,
  loadTransactions,
  loadUser,
  loadUserStatistic,
  loadedAwards,
  loadedChildrenStatistics,
  loadedChildrens,
  loadedMoneyBoxes,
  loadedStories,
  loadedStoryById,
  loadedTransactionCategories,
  loadedTransactions,
  loadedUser,
  loadedUserStatistic,
  openCreateNewTransactionPopup,
  openStory,
} from './users.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiUsersService } from '../services/api-users.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { StoryCardComponent } from '../modules/story-card/story-card.component';
import { CreateTransactionComponent } from '../modules/create-transaction/create-transaction.component';
import { TUI_PROMPT } from '@taiga-ui/kit';
import {
  navigateTo,
  showErrorMessage,
  showSuccessMessage,
} from 'src/app/store';
import { EMPTY, forkJoin, of } from 'rxjs';
import { EditMoneyBoxComponent } from '../modules/edit-money-box/edit-money-box.component';
import { ACTIONS } from '../consts/action.const';
import { CreateMoneyBoxComponent } from '../modules/create-money-box/create-money-box.component';
import { AddChildrenComponent } from '../modules/add-children/add-children.component';

@Injectable()
export class UsersEffects {
  loadStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStories),
      switchMap(() =>
        this.apiUsersService.getStories().pipe(
          map((stories) => loadedStories({ stories })),
          catchError(() => [loadedStories({ stories: [] })])
        )
      )
    )
  );

  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTransactions),
      switchMap(({ filter }) =>
        this.apiUsersService.getTransaction(filter).pipe(
          map((transactions) => loadedTransactions({ transactions })),
          catchError(() => [loadedTransactions({ transactions: [] })])
        )
      )
    )
  );

  loadStoryById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStoryById),
      switchMap(({ id }) =>
        this.apiUsersService
          .getStoryById(id)
          .pipe(map((story) => loadedStoryById({ story })))
      )
    )
  );

  openStory$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(openStory),
        switchMap(() =>
          this.dialogService.open<void>(
            new PolymorpheusComponent(StoryCardComponent, this.injector)
          )
        )
      ),
    { dispatch: false }
  );

  openCreateNewTransactionPopup$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(openCreateNewTransactionPopup),
        switchMap(() =>
          this.dialogService.open<void>(
            new PolymorpheusComponent(CreateTransactionComponent, this.injector)
          )
        )
      ),
    { dispatch: false }
  );

  loadUserStatistic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserStatistic),
      switchMap(({ from, to }) =>
        this.apiUsersService
          .getUserStatistic(from, to)
          .pipe(map((statistic) => loadedUserStatistic({ statistic })))
      )
    )
  );

  loadTransactionCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTransactionCategories),
      switchMap(() =>
        this.apiUsersService
          .getCategories()
          .pipe(
            map((categories) => loadedTransactionCategories({ categories }))
          )
      )
    )
  );

  loadMoneyBoxes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMoneyBoxes),
      switchMap(() =>
        this.apiUsersService
          .getMoneyBoxes()
          .pipe(map((moneyBoxes) => loadedMoneyBoxes({ moneyBoxes })))
      )
    )
  );

  deleteMoneyBox$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteMoneyBox),
      switchMap(({ id }) =>
        forkJoin([
          this.dialogService.open<boolean>(TUI_PROMPT, {
            label: 'Вы действительно хотите удалить копилку?',
            size: 'm',
          }),
          of(id),
        ])
      ),
      switchMap(([flag, id]) =>
        flag ? this.apiUsersService.deleteMoneyBox(id) : EMPTY
      ),
      switchMap(() => [
        loadMoneyBoxes(),
        showSuccessMessage({ message: 'Вы успешно удалили копилку' }),
      ])
    )
  );

  createTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTransaction),
      switchMap(({ transaction }) =>
        this.apiUsersService
          .createTransaction(transaction)
          .pipe(
            switchMap(() => [
              navigateTo({ payload: { path: ['users'] } }),
              showSuccessMessage({ message: 'Вы успешно добавили трату' }),
            ])
          )
      )
    )
  );

  editMoneyBox$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editMoneyBox),
      switchMap(({ id, action }) =>
        this.dialogService.open<{ action: ACTIONS; id: number; sum: number }>(
          new PolymorpheusComponent(EditMoneyBoxComponent, this.injector),
          {
            data: {
              id,
              action,
            },
          }
        )
      ),
      switchMap(({ action, id, sum }) =>
        this.apiUsersService.editMoneyBox(action, id, sum).pipe(
          switchMap(() => [
            loadMoneyBoxes(),
            showSuccessMessage({
              message: `Вы успешно ${
                action === ACTIONS.ADD ? 'положили' : 'взяли'
              } ${sum}₽`,
            }),
          ])
        )
      )
    )
  );

  addReceipt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addReceipt),
      switchMap(() =>
        this.dialogService.open<{ sum: number }>(
          new PolymorpheusComponent(EditMoneyBoxComponent, this.injector),
          {}
        )
      ),
      switchMap(({ sum }) =>
        this.apiUsersService
          .addReceipt(sum)
          .pipe(
            switchMap(() => [
              loadTransactions({ filter: {} }),
              loadUserStatistic({}),
              showSuccessMessage({ message: `Вы успешно добавили ${sum}₽` }),
            ])
          )
      )
    )
  );

  createMoneyBox$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createMoneyBox),
      switchMap(() =>
        this.dialogService.open<{ action: ACTIONS; id: number; sum: number }>(
          new PolymorpheusComponent(CreateMoneyBoxComponent, this.injector)
        )
      ),
      switchMap(({ action, id, sum }) =>
        this.apiUsersService.editMoneyBox(action, id, sum).pipe(
          switchMap(() => [
            loadMoneyBoxes(),
            showSuccessMessage({
              message: `Вы успешно ${
                action === ACTIONS.ADD ? 'положили' : 'взяли'
              } ${sum}₽`,
            }),
          ])
        )
      )
    )
  );

  loadChildrens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChildrens),
      switchMap(() =>
        this.apiUsersService.getChildrens().pipe(
          map((childrens) => loadedChildrens({ childrens })),
          catchError(() => [loadedChildrens({ childrens: [] })])
        )
      )
    )
  );

  loadChildrenStatistics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChildrenStatistics),
      switchMap(({ id }) =>
        this.apiUsersService.getChildrenStatistics(id).pipe(
          map((statistics) => loadedChildrenStatistics({ statistics })),
          catchError(() => [
            showErrorMessage({
              message: 'Попробуйте загрузить статистику позже',
            }),
          ])
        )
      )
    )
  );

  deleteChildren$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteChildren),
      switchMap(({ id }) =>
        forkJoin([
          this.dialogService.open<boolean>(TUI_PROMPT, {
            label: 'Вы действительно хотите удалить ребенка?',
            size: 'm',
          }),
          of(id),
        ])
      ),
      switchMap(([flag, id]) =>
        flag ? this.apiUsersService.deleteChildren(id) : EMPTY
      ),
      switchMap(() => [
        loadChildrens(),
        showSuccessMessage({ message: 'Вы успешно удалили ребенка' }),
      ]),
      catchError(() => [
        showErrorMessage({ message: 'Попробуйте удалить ребенка позже' }),
      ])
    )
  );

  addChildren$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addChildren),
      switchMap(() =>
        this.dialogService.open<{ action: ACTIONS; id: number; sum: number }>(
          new PolymorpheusComponent(AddChildrenComponent, this.injector)
        )
      ),
      switchMap(({ action, id, sum }) =>
        this.apiUsersService.editMoneyBox(action, id, sum).pipe(
          switchMap(() => [
            loadMoneyBoxes(),
            showSuccessMessage({
              message: `Вы успешно ${
                action === ACTIONS.ADD ? 'положили' : 'взяли'
              } ${sum}₽`,
            }),
          ])
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      switchMap(() =>
        this.apiUsersService.getUserInfo().pipe(
          map(({ email, date, photo }) => loadedUser({ email, date, photo })),
          catchError(() => [
            showErrorMessage({
              message: 'Попробуйте загрузить информацию позже',
            }),
          ])
        )
      )
    )
  );

  loadAwards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAwards),
      switchMap(() =>
        this.apiUsersService.getAwards().pipe(
          map((awards) => loadedAwards({ awards })),
          catchError(() => [
            loadedAwards({ awards: [] }),
            showErrorMessage({
              message: 'Попробуйте загрузить позже позже',
            }),
          ])
        )
      )
    )
  );

  constructor(
    private readonly apiUsersService: ApiUsersService,
    private readonly store$: Store,
    private readonly actions$: Actions,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}
}
