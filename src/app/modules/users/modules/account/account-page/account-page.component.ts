import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { filter, map, take } from 'rxjs/operators';
import { role } from 'src/app/store';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageComponent {
  role$ = this.store$.pipe(
    select(role),
    filter(tuiIsPresent),
    take(1),
    map((role) => {
      const items = [
        { name: '← Главная', route: '/users' },
        { name: 'Аккаунт', route: '/users/account' },
        { name: 'Траты', route: '/users/account/transactions' },
        { name: 'Награды', route: '/users/account/awards' },
      ];

      if (role === 'Родитель') {
        items.push({ name: 'Дети', route: '/users/account/childrens' });
      }

      return items;
    })
  );

  constructor(private readonly store$: Store) {}
}
