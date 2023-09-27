import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
    // loading$ = this.store$.pipe(select(loading));
    // awards$ = this.store$.pipe(select(awards));

    constructor(private readonly store$: Store) {}

    ngOnInit(): void {
        // this.store$.dispatch(loadAwards())
    }
}
