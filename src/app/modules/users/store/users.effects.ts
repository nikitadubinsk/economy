import { Inject, Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TuiDialogService } from '@taiga-ui/core';
import {
  createTransaction,
  deleteMoneyBox,
  editMoneyBox,
  loadMoneyBoxes,
  loadStories,
  loadStoryById,
  loadTransactionCategories,
  loadUserStatistic,
  loadedMoneyBoxes,
  loadedStories,
  loadedStoryById,
  loadedTransactionCategories,
  loadedTransactions,
  loadedUserStatistic,
  openCreateNewTransactionPopup,
  openStory,
} from './users.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ApiUsersService } from '../services/api-users.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { StoryCardComponent } from '../modules/story-card/story-card.component';
import { CreateTransactionComponent } from '../modules/create-transaction/create-transaction.component';
import { TUI_PROMPT } from '@taiga-ui/kit';
import { navigateTo, showSuccessMessage } from 'src/app/store';
import { EMPTY, forkJoin, of } from 'rxjs';
import { EditMoneyBoxComponent } from '../modules/edit-money-box/edit-money-box.component';
import { ACTIONS } from '../consts/action.const';
import { loadTransactions } from './users.actions';

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
      switchMap(({filter}) =>
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
        ),
        tap(() => console.log('AAAA'))
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

  editMoneyBox$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editMoneyBox),
        tap(() => console.log("123")),
        switchMap(({ id, action }) =>
          this.dialogService.open<{action: ACTIONS, id: number, sum: number}>(
            new PolymorpheusComponent(EditMoneyBoxComponent, this.injector),
            {
              data: {
                id,
                action,
              },
            }
          )
        ),
        switchMap(({ action, id, sum}) => this.apiUsersService.editMoneyBox(action, id, sum).pipe(
          switchMap(() => [
            loadMoneyBoxes(),
            showSuccessMessage({ message: `Вы успешно ${action === ACTIONS.ADD ? 'положили' : 'взяли'} ${sum}₽` }),
          ])
        ))
      ),
  );

  constructor(
    private readonly apiUsersService: ApiUsersService,
    private readonly store$: Store,
    private readonly actions$: Actions,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}
}
