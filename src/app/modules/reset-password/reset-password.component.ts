import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
    //loading$ = this.store$.pipe(select(loadingButton));

    authForm = this.fb.group({
        login: [null, Validators.required],
    });

    constructor(
        // private readonly store$: Store,
        private readonly fb: FormBuilder,
    ) {}

    onSubmit() {
        //this.store$.dispatch(resetPassword({login: this.authForm.value.login}))
    }
}
