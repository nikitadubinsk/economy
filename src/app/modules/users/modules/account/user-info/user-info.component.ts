import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadUser, loaderUserInfo, userInfo } from '../../../store';
import { name } from 'src/app/store';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
    info$ = this.store$.pipe(select(userInfo));
    name$ = this.store$.pipe(select(name));
    loader$ = this.store$.pipe(select(loaderUserInfo));

    constructor(private readonly store$: Store) {}

    ngOnInit(): void {
        this.store$.dispatch(loadUser())
    }
}
