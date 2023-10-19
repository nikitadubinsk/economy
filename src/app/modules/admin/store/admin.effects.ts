import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ApiAdminService } from '../services/api-admin.service';
import { loadStatistics } from './admin.actions';
import { showSuccessMessage } from 'src/app/store';

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
}
