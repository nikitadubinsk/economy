import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { filter } from 'rxjs/operators';
import { logout } from 'src/app/store';
import { name } from 'src/app/store';

@Component({
  selector: 'app-managers-container',
  templateUrl: './managers-container.component.html',
  styleUrls: ['./managers-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagersContainerComponent {
  name$ = this.store$.pipe(select(name), filter(tuiIsPresent));

  items = [
    { name: 'Истории', route: '/managers/stories' },
    { name: 'Рассылки', route: '/managers/mailing' },
    { name: 'Пользователи', route: '/managers/users' },
  ];

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  logout() {
    this.store$.dispatch(logout());
  }
}
