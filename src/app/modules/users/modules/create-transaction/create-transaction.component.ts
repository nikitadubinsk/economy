import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {
  categories,
  createTransaction,
  loadTransactionCategories,
} from '../../store';
import { categoriesLoader } from '../../store/users.selector';
import {
  TuiContextWithImplicit,
  TuiDay,
  TuiStringHandler,
  tuiPure,
} from '@taiga-ui/cdk';
import { ISimpleItem } from 'src/app/models';
import { navigateTo } from 'src/app/store';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTransactionComponent implements OnInit {
  categories$ = this.store$.pipe(select(categories));
  categoriesLoader$ = this.store$.pipe(select(categoriesLoader));

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  createForm = this.fb.group({
    name: ['', [Validators.required]],
    sum: [0, [Validators.required, Validators.min(1)]],
    category: [undefined, [Validators.required]],
    date: [undefined, [Validators.required]],
  });

  ngOnInit(): void {
    this.store$.dispatch(loadTransactionCategories());
  }

  backToUserPage() {
    this.store$.dispatch(navigateTo({ payload: { path: ['/users'] } }));
  }

  @tuiPure
  stringify(
    items: readonly ISimpleItem[]
  ): TuiStringHandler<TuiContextWithImplicit<number>> {
    const map = new Map(
      items.map(({ id, name }) => [id, name] as [number, string])
    );

    return ({ $implicit }: TuiContextWithImplicit<number>) =>
      map.get($implicit) || '';
  }

  createTransaction() {
    this.store$.dispatch(
      createTransaction({
        transaction: {
          ...this.createForm.value,
          date: this.createForm.value.date.toString(),
        },
      })
    );
  }
}
