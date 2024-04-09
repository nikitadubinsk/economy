import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { rate } from '../store';

import { loadRateById } from '../store/admin.actions';

@Injectable({
  providedIn: 'root',
})
export class EditAdminRateResolver implements Resolve<boolean> {
  constructor(private readonly store$: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const { id } = route.params;

    return this.store$.pipe(
      select(rate),
      take(1),
      map((rate) => {
        if (!rate || !id) {
          this.store$.dispatch(loadRateById({ id }));
        }

        return true;
      })
    );
  }
}
