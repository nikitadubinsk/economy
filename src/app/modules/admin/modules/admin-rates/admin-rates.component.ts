import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { navigateTo } from 'src/app/store';
import { loadingRates, rates } from '../../store';
import { loadRates } from '../../store/admin.actions';

@Component({
  selector: 'app-admin-rates',
  templateUrl: './admin-rates.component.html',
  styleUrls: ['./admin-rates.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRatesComponent implements OnInit {
  rates$ = this.store$.pipe(select(rates));
  loadingRates$ = this.store$.pipe(select(loadingRates));

  constructor(
    private readonly store$: Store,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(loadRates());
  }

  createRate() {
    this.store$.dispatch(
      navigateTo({ payload: { path: ['/admin/rates/create'] } })
    );
  }
}
