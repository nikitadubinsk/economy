import { Inject, Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TuiDialogService } from '@taiga-ui/core';
import {
  loadStories,
  loadStoryById,
  loadUserStatistic,
  loadedStories,
  loadedStoryById,
  loadedUserStatistic,
  openCreateNewTransactionPopup,
  openStory,
} from './users.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ApiUsersService } from '../services/api-users.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { StoryCardComponent } from '../modules/story-card/story-card.component';
import { CreateTransactionComponent } from '../modules/create-transaction/create-transaction.component';

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
        tap(() => console.log("AAAA"))
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
      switchMap(({from, to}) =>
        this.apiUsersService
          .getUserStatistic(from, to)
          .pipe(map((statistic) => loadedUserStatistic({ statistic })))
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
