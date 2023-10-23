import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { awards, awardsLoader, loadAwards } from '../../../store';

@Component({
  selector: 'app-user-awards',
  templateUrl: './user-awards.component.html',
  styleUrls: ['./user-awards.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAwardsComponent implements OnInit {
  awards$ = this.store$.pipe(select(awards));
  loader$ = this.store$.pipe(select(awardsLoader));

  constructor(private readonly store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(loadAwards());
  }
}
