import { Inject, Injectable, Injector } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { ApiManagerService } from '../services/api-managers.service';
import {
  changeWeightStories,
  changeWeightStoriesSuccess,
  deleteStory,
  editStory,
  loadChapters,
  loadStories,
  loadedChapters,
  loadedStories,
} from './managers.actions';
import { EMPTY, forkJoin, of } from 'rxjs';
import { stories } from './managers.selector';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { IStoryManagerInfo } from 'src/app/models';
import { getChangedWeightsList } from '../utils/get-changed-weights-list';
import { showSuccessMessage } from 'src/app/store';
import { TuiDialogService } from '@taiga-ui/core';
import { TUI_PROMPT } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EditStoryComponent } from '../modules/edit-story/edit-story.component';
import { ACTIONS } from '../consts/action.const';
import { activeStory } from './managers.actions';

@Injectable()
export class ManagersEffects {
  constructor(
    private readonly store$: Store,
    private readonly actions$: Actions,
    private readonly apiManagerService: ApiManagerService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  loadStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStories),
      switchMap(() =>
        this.apiManagerService
          .getStories()
          .pipe(map((stories) => loadedStories({ stories })))
      )
    )
  );

  changeWeightStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeWeightStories),
      switchMap((data) =>
        forkJoin([
          this.store$.pipe(select(stories), take(1), filter(tuiIsPresent)),
          of(data),
        ])
      ),
      map(([stories, { indexTo, indexFrom }]) => {
        const storiesList: IStoryManagerInfo[] = getChangedWeightsList(
          stories,
          indexFrom,
          indexTo
        );

        return changeWeightStoriesSuccess({ stories: storiesList });
      })
    )
  );

  deleteStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStory),
      switchMap(({ id }) =>
        forkJoin([
          this.dialogService.open<boolean>(TUI_PROMPT, {
            label: 'Вы действительно хотите удалить историю?',
            size: 'm',
          }),
          of(id),
        ])
      ),
      switchMap(([flag, id]) =>
        flag ? this.apiManagerService.deleteStory(id) : EMPTY
      ),
      switchMap(() => [
        loadStories(),
        showSuccessMessage({ message: 'Вы успешно удалили историю' }),
      ])
    )
  );

  editStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editStory),
      switchMap(({ story }) =>
        this.dialogService.open<{ story: IStoryManagerInfo }>(
          new PolymorpheusComponent(EditStoryComponent, this.injector),
          {
            data: {
              story,
              action: ACTIONS.EDIT,
            },
          }
        )
      ),
      switchMap(({ story }) =>
        this.apiManagerService.editStory(story.id).pipe(
          switchMap(() => [
            loadStories(),
            showSuccessMessage({
              message: 'Вы успешно изминили историю',
            }),
          ])
        )
      )
    )
  );

  activeStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activeStory),
      switchMap(({ id, active }) =>
        this.apiManagerService
          .activeStory(id, active)
          .pipe(
            map(() =>
              showSuccessMessage({
                message: 'Вы успешно изменили статус активности истории',
              })
            )
          )
      )
    )
  );

  loadChapters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChapters),
      switchMap(({ id }) =>
        this.apiManagerService
          .getChapters(id)
          .pipe(map((chapters) => loadedChapters({ chapters })))
      )
    )
  );
}
