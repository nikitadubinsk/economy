import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { deleteTransaction, loadTransactions } from '../../../store';
import {
  transactionsLoader,
  transactions,
  transactionsPage,
  transactionsTotalPages,
} from '../../../store/users.selector';
import { Subject, combineLatest } from 'rxjs';
import {
  takeUntil,
  filter,
  debounceTime,
  distinctUntilChanged,
  map,
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
  transactionsTotalPages$ = this.store$.pipe(select(transactionsTotalPages));
  transactionsPage$ = this.store$.pipe(select(transactionsPage));

  isShowStub$ = combineLatest([
    this.transactions$,
    this.transactionsLoader$,
  ]).pipe(map(([transactions, loader]) => !transactions.length && !loader));

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
        debounceTime(1000),
        takeUntil(this.destroy$)
      )
      .subscribe((filter) => {
        this.store$.dispatch(
          loadTransactions({
            filter: {
              name: filter?.name,
              dateFrom: filter?.date?.from.toString(),
              dateTo: filter?.date?.to.toString(),
              page: 0,
            },
          })
        );
      });
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

  delete(id: number) {
    this.store$.dispatch(deleteTransaction({ id }));
  }

  ngOnDestroy(): void {}
}
