import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { navigateTo } from 'src/app/store';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUserInfoComponent {
  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly store$: Store
  ) {}

  // moneyBoxForm = this.fb.group({
  //   name: [undefined, [Validators.required]],
  //   sum: [undefined, [Validators.required, Validators.min(1)]],
  //   date: [undefined, []],
  // });

  backToUserPage() {
    this.store$.dispatch(navigateTo({ payload: { path: ['/users/account'] } }));
  }
}
