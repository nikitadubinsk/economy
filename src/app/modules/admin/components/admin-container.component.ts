import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { logout } from 'src/app/store';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminContainerComponent {
  items = [
    { name: 'Статистика', route: '/admin' },
    { name: 'Менеджеры', route: '/admin/managers' },
  ];

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  logout() {
    this.store$.dispatch(logout());
  }
}
