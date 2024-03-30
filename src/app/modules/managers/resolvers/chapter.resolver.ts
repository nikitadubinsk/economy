import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { chapter, loadChapterById, saveStoryId } from '../store';

@Injectable({
  providedIn: 'root',
})
export class ChapterResolver implements Resolve<boolean> {
  constructor(private readonly store$: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const { chapterId, id } = route.params;

    return this.store$.pipe(
      select(chapter),
      take(1),
      map((chapter) => {
        if (!chapter) {
          if (chapterId !== 'create') {
            this.store$.dispatch(loadChapterById({ id: chapterId }));
          }

          this.store$.dispatch(saveStoryId({ id }));
        }

        return true;
      })
    );
  }
}
