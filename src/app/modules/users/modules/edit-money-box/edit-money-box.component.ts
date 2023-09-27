import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import { ACTIONS } from '../../consts/action.const';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-edit-money-box',
  templateUrl: './edit-money-box.component.html',
  styleUrls: ['./edit-money-box.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditMoneyBoxComponent {
  constructor(private readonly fb: FormBuilder, @Inject(POLYMORPHEUS_CONTEXT)
  private readonly context: TuiDialogContext<{action: ACTIONS, id: number, sum: number}, {id: number; action: ACTIONS}>) {}

  moneyBoxForm = this.fb.group({
    sum: [undefined, [Validators.required, Validators.min(1)]],
  });

  get title() {
    return this.context.data.action === ACTIONS.ADD ? 'Пополнить копилку' : "Взять деньги из копилки"
  }

  editMoneyBox() {
    this.context.completeWith({
      ...this.context.data,
      sum: this.moneyBoxForm.value.sum
    });
  }
}
