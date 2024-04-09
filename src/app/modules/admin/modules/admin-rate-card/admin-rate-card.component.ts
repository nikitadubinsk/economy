import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { navigateTo } from 'src/app/store';
import { IRate } from '../../models/rates.model';
import { activeRate, chooseRate } from '../../store/admin.actions';

@Component({
  selector: 'app-admin-rate-card',
  templateUrl: './admin-rate-card.component.html',
  styleUrls: ['./admin-rate-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRateCardComponent implements OnInit {
  @Input() rate!: IRate;

  private destroy$ = new Subject<void>();

  rateForm = this.fb.group({
    active: [false],
  });

  constructor(
    private readonly store$: Store,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.rateForm.get('active')?.patchValue(this.rate.active);

    this.rateForm.controls.active.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.store$.dispatch(
          activeRate({
            active: this.rateForm.value.active || false,
            id: this.rate.id,
          })
        );
      });
  }

  editRate() {
    this.store$.dispatch(chooseRate({ rate: this.rate }));
    this.store$.dispatch(
      navigateTo({ payload: { path: [`/admin/rates/${this.rate.id}`] } })
    );
  }
}
