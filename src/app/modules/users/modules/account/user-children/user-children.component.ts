import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-user-children',
    templateUrl: './user-children.component.html',
    styleUrls: ['./user-children.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserChildrenComponent implements OnInit {
    // loading$ = this.store$.pipe(select(loading));
    // awards$ = this.store$.pipe(select(awards));

    constructor(private readonly store$: Store) {}

    ngOnInit(): void {
        // this.store$.dispatch(loadAwards())
    }
}
