import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTransactionComponent implements OnInit {
  constructor(private readonly store$: Store) {}

  ngOnInit(): void {
    // this.store$.dispatch(loadStoryById({ id: 1 }));
  }
}
