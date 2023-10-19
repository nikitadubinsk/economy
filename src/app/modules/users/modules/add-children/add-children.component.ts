import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import { ACTIONS } from '../../consts/action.const';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-add-children',
  templateUrl: './add-children.component.html',
  styleUrls: ['./add-children.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddChildrenComponent {
  constructor(private readonly fb: FormBuilder, @Inject(POLYMORPHEUS_CONTEXT)
  private readonly context: TuiDialogContext<{action: ACTIONS, id: number, sum: number}>) {}

  childrenForm = this.fb.group({
    name: [undefined, [Validators.required]],
    email: [undefined, [Validators.required, Validators.email]],
    date: [undefined, [Validators.required]],
  });

  addChildren() {
    
  }
}
