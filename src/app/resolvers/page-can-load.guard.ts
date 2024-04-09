import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { role } from '../store';

@Injectable({
  providedIn: 'root',
})
export class PageCanLoadGuard implements CanLoad {
  constructor(private readonly store$: Store) {}

  canLoad(route: Route): Observable<boolean> {
    return this.store$.pipe(
      select(role),
      filter(tuiIsPresent),
      take(1),
      map((role) => !!route?.data?.roles.find((r: string) => r === role))
    );
  }
}
