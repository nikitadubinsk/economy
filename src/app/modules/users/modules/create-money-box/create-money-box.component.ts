import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import { ACTIONS } from '../../consts/action.const';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-create-money-box',
  templateUrl: './create-money-box.component.html',
  styleUrls: ['./create-money-box.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateMoneyBoxComponent {
  constructor(private readonly fb: FormBuilder, @Inject(POLYMORPHEUS_CONTEXT)
  private readonly context: TuiDialogContext<{action: ACTIONS, id: number, sum: number}>) {}

  moneyBoxForm = this.fb.group({
    name: [undefined, [Validators.required]],
    sum: [undefined, [Validators.required, Validators.min(1)]],
    date: [undefined, [Validators.required]],
  });

  editMoneyBox() {
    
  }
}
