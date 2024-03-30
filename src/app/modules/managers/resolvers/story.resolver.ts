import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { loadStoryById, story } from '../store';

@Injectable({
  providedIn: 'root',
})
export class StoryResolver implements Resolve<boolean> {
  constructor(private readonly store$: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const { id } = route.params;

    return this.store$.pipe(
      select(story),
      take(1),
      map((story) => {
        if (!story) {
          this.store$.dispatch(loadStoryById({ id }));
        }

        return true;
      })
    );
  }
}
