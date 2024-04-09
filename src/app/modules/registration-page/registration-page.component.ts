import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { checkPasswordValidator } from 'src/app/directives/check-password.directive';
import { loadingButton, registrateUser } from 'src/app/store';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPageComponent implements OnInit {
  loading$ = this.store$.pipe(select(loadingButton));

  registrationForm = this.fb.group(
    {
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      specifyParent: [false],
      parentEmail: ['', [Validators.email]],
    },
    { validators: checkPasswordValidator }
  );

  isShowParentEmail = false;

  constructor(
    private readonly store$: Store,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registrationForm.controls.specifyParent.valueChanges.subscribe(
      (res) => (this.isShowParentEmail = res || false)
    );
  }

  registration() {
    this.store$.dispatch(
      registrateUser({
        info: {
          name: this.registrationForm.value.name || '',
          birthday: this.registrationForm.value.birthday || '',
          email: this.registrationForm.value.email || '',
          password1: this.registrationForm.value.password1 || '',
          password2: this.registrationForm.value.password2 || '',
          parentEmail: this.isShowParentEmail
            ? this.registrationForm.value.parentEmail || undefined
            : undefined,
        },
      })
    );
  }
}
