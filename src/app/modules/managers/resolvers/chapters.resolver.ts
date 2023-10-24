import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { chapters, loadChapters } from '../store';

@Injectable({
  providedIn: 'root',
})
export class ChaptersResolver implements Resolve<boolean> {
  constructor(private readonly store$: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const { id } = route.params;

    return this.store$.pipe(
      select(chapters),
      take(1),
      map((chapters) => {
        this.store$.dispatch(loadChapters({ id }));

        return true;
      })
    );
  }
}
