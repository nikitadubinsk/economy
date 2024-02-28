import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { auth, loadingButton } from 'src/app/store';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  loading$ = this.store$.pipe(select(loadingButton));

  authForm = this.fb.group({
    login: [null, Validators.required, Validators.email],
    password: [null, Validators.required],
  });

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly store$: Store
  ) {}

  onSubmit() {
    this.store$.dispatch(
      auth({
        login: this.authForm.value.login,
        password: this.authForm.value.password,
      })
    );
  }
}
