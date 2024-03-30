import { Inject, Injectable, Injector } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { ApiManagerService } from '../services/api-managers.service';
import {
  activeChapter,
  changeWeightStories,
  changeWeightStoriesSuccess,
  createStory,
  deleteChapter,
  deleteStory,
  editStory,
  loadChapterById,
  loadChapters,
  loadStories,
  loadStoryById,
  loadedChapterById,
  loadedChapters,
  loadedStories,
  loadedStoryById,
  saveNewWeight,
  turnOffLoaderButton,
} from './managers.actions';
import { EMPTY, forkJoin, of } from 'rxjs';
import { stories, storyFilters, storyId } from './managers.selector';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { IStoryManagerInfo } from 'src/app/models';
import { getChangedWeightsList } from '../utils/get-changed-weights-list';
import { navigateTo, showSuccessMessage } from 'src/app/store';
import { TuiDialogService } from '@taiga-ui/core';
import { TUI_PROMPT } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EditStoryComponent } from '../modules/edit-story/edit-story.component';
import { ACTIONS } from '../consts/action.const';
import { activeStory, selectChapter } from './managers.actions';

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
      switchMap(({ filters }) =>
        this.apiManagerService.getStories(filters).pipe(
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
        this.apiManagerService
          .getStory(id)
          .pipe(map((story) => loadedStoryById({ story })))
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
          this.store$.pipe(select(storyFilters), take(1), filter(tuiIsPresent)),
        ])
      ),
      switchMap(([flag, id, filters]) =>
        flag
          ? this.apiManagerService
              .deleteStory(id)
              .pipe(
                switchMap(() => [
                  loadStories({ filters }),
                  showSuccessMessage({ message: 'Вы успешно удалили историю' }),
                ])
              )
          : EMPTY
      )
    )
  );

  activeStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activeStory),
      switchMap(({ id, active }) =>
        this.apiManagerService.activeStory(id, active).pipe(
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

  activeChapter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activeChapter),
      switchMap(({ id, active }) =>
        this.apiManagerService.activeChapter(id, active).pipe(
          map(() =>
            showSuccessMessage({
              message: 'Вы успешно изменили статус активности истории',
            })
          )
        )
      )
    )
  );

  selectChapter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectChapter),
      switchMap((data) =>
        forkJoin([
          this.store$.pipe(select(storyId), take(1), filter(tuiIsPresent)),
          of(data),
        ])
      ),
      map(([storyId, { id }]) =>
        navigateTo({ payload: { path: [`/managers/story/${storyId}/${id}`] } })
      )
    )
  );

  eleteChapter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteChapter),
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
        flag
          ? this.apiManagerService
              .deleteStory(id)
              .pipe(
                switchMap(() => [
                  loadChapters({ id: 1 }),
                  showSuccessMessage({ message: 'Вы успешно удалили историю' }),
                ])
              )
          : EMPTY
      )
    )
  );

  loadChapterById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChapterById),
      switchMap(({ id }) =>
        this.apiManagerService
          .getChapterById(id)
          .pipe(map((chapter) => loadedChapterById({ chapter })))
      )
    )
  );

  createStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createStory),
      switchMap(({ title, category, active, img }) =>
        this.apiManagerService.createStory(title, category, active, img).pipe(
          switchMap(() => [
            showSuccessMessage({
              message: 'Вы успешно создали новую историю',
            }),
            turnOffLoaderButton(),
            navigateTo({ payload: { path: ['/managers'] } }),
          ])
        )
      )
    )
  );

  editStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editStory),
      switchMap(({ id, title, category, active, img }) =>
        this.apiManagerService.editStory(id, title, category, active, img).pipe(
          switchMap(() => [
            showSuccessMessage({
              message: 'Вы успешно изменили историю',
            }),
            turnOffLoaderButton(),
            navigateTo({ payload: { path: ['/managers'] } }),
          ])
        )
      )
    )
  );

  saveNewWeight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveNewWeight),
      switchMap(() =>
        this.store$.pipe(
          select(stories),
          take(1),
          filter(tuiIsPresent),
          map((stories) =>
            stories.map((story) => ({ id: story.id, weight: story.weight }))
          ),
          switchMap((stories) =>
            this.apiManagerService.changeWeight(stories).pipe(
              switchMap(() => [
                showSuccessMessage({
                  message: 'Вы успешно сохранили новый порядок историй',
                }),
                turnOffLoaderButton(),
              ])
            )
          )
        )
      )
    )
  );
}
