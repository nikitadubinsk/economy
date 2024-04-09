import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import { ACTIONS } from '../../consts/action.const';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { Store } from '@ngrx/store';
import { navigateTo } from 'src/app/store';
import { createMoneyBox } from '../../store';

@Component({
  selector: 'app-create-money-box',
  templateUrl: './create-money-box.component.html',
  styleUrls: ['./create-money-box.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateMoneyBoxComponent {
  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly store$: Store
  ) {}

  moneyBoxForm = this.fb.group({
    name: [undefined, [Validators.required]],
    sum: [undefined, [Validators.required, Validators.min(1)]],
    date: [undefined, []],
  });

  backToUserPage() {
    this.store$.dispatch(navigateTo({ payload: { path: ['/users'] } }));
  }

  createMoneyBox() {
    this.store$.dispatch(createMoneyBox({ moneyBox: this.moneyBoxForm.value }));
  }
}
