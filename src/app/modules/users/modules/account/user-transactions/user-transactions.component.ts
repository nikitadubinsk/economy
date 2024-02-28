import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { loadTransactions } from '../../../store';
import {
  transactionsLoader,
  transactions,
} from '../../../store/users.selector';
import { Subject } from 'rxjs';
import {
  takeUntil,
  filter,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { isEqual } from 'src/app/utils/is-equal.util';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTransactionsComponent implements OnInit, OnDestroy {
  transactionsLoader$ = this.store$.pipe(select(transactionsLoader));
  transactions$ = this.store$.pipe(select(transactions));

  private destroy$ = new Subject<void>();

  filterForm = this.fb.group({
    name: [null],
    date: [null],
  });

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(loadTransactions({ filter: {} }));

    this.filterForm.valueChanges
      .pipe(
        distinctUntilChanged(isEqual),
        debounceTime(500),
        takeUntil(this.destroy$)
      )
      .subscribe((filter) =>
        this.store$.dispatch(
          loadTransactions({
            filter: {
              ...filter,
              date: filter.date.toString(),
              page: 0,
            },
          })
        )
      );
  }

  goToPage(page: number) {
    this.store$.dispatch(
      loadTransactions({
        filter: {
          page,
          ...this.filterForm.value,
        },
      })
    );
  }

  ngOnDestroy(): void {}
}
