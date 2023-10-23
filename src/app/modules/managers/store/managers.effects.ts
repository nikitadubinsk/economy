import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiManagerService } from '../services/api-managers.service';
import { loadStories, loadedStories } from './managers.actions';

@Injectable()
export class ManagersEffects {
  constructor(
    private readonly store$: Store,
    private readonly actions$: Actions,
    private readonly apiManagerService: ApiManagerService
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
}
