import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import {
  clearRate,
  createRate,
  loading,
  loadingRates,
  rate,
  updateRate,
} from '../../store';
import { ICreateRate, IRate } from '../../models/rates.model';
import { IFormGroup } from 'src/app/models/ng-types.model';

@Component({
  selector: 'app-admin-create-rate',
  templateUrl: './admin-create-rate.component.html',
  styleUrls: ['./admin-create-rate.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCreateRateComponent implements OnDestroy {
  createMode$ = new BehaviorSubject(true);
  private destroy$ = new Subject<void>();
  loading$ = this.store$.pipe(select(loading));
  loadingRates$ = this.store$.pipe(select(loadingRates));

  navigateBack = {
    routerLink: '/admin/rates',
    caption: 'Вернуться к списку тарифов',
  };

  rate: IRate | null = null;
  createMode = true;

  title$ = this.createMode$.pipe(
    map((createMode) =>
      createMode
        ? 'Создание нового тарифа'
        : `Редактирование тарифа «${this.rate?.name}»`
    )
  );
  button$ = this.createMode$.pipe(
    map((createMode) => (createMode ? 'Добавить' : 'Сохранить'))
  );

  rateForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [0, [Validators.required]],
    maxUsers: [0, [Validators.required]],
    active: [false],
  });

  rate$ = this.store$
    .pipe(select(rate), filter(tuiIsPresent), takeUntil(this.destroy$))
    .subscribe((rate: IRate) => {
      this.rate = rate;
      this.createMode = false;
      this.rateForm.patchValue(rate);
      this.createMode$.next(false);
    });

  constructor(
    private readonly store$: Store,
    private readonly fb: FormBuilder
  ) {}

  onSubmit() {
    const rate: ICreateRate = {
      name: this.rateForm.value.name || '',
      description: this.rateForm.value.description || '',
      price: this.rateForm.value.price || 0,
      maxUsers: this.rateForm.value.maxUsers || 0,
      active: this.rateForm.value.active || false,
    };
    this.store$.dispatch(
      this.createMode
        ? createRate({ rate })
        : updateRate({ rate, id: this.rate?.id || 0 })
    );
  }

  ngOnDestroy(): void {
    this.store$.dispatch(clearRate());
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
