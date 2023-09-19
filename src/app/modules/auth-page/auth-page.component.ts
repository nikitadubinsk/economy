import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
    //loading$ = this.store$.pipe(select(loadingButton));

    authForm = this.fb.group({
        login: [null, Validators.required],
        password: [null, Validators.required],
    });

    constructor(
        private readonly fb: FormBuilder,
    ) {}

    onSubmit() {
        //this.store$.dispatch(auth({login: this.authForm.value.login, password: this.authForm.value.password}))
    }
}
