import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { filter } from 'rxjs/operators';
import { logout } from 'src/app/store';
import { name } from 'src/app/store';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminContainerComponent {
  name$ = this.store$.pipe(select(name), filter(tuiIsPresent));

  items = [
    { name: 'Статистика', route: '/admin/statistics' },
    { name: 'Менеджеры', route: '/admin/managers' },
    { name: 'Тарифы', route: '/admin/rates' },
  ];

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  logout() {
    this.store$.dispatch(logout());
  }
}
