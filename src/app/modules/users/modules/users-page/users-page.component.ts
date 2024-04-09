import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Inject,
} from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {
  TuiDay,
  TuiDayLike,
  TuiDayRange,
  TuiMonth,
  TuiStringHandler,
  tuiIsPresent,
  tuiPure,
  tuiSum,
} from '@taiga-ui/cdk';
import { TUI_MONTHS } from '@taiga-ui/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import {
  isDarkMode,
  loadUserInfo,
  name,
  navigateTo,
  role,
  switchTheme,
} from 'src/app/store';
import {
  addReceipt,
  childrens,
  childrensLoader,
  createMoneyBox,
  deleteMoneyBox,
  editMoneyBox,
  loadChildrens,
  loadMoneyBoxes,
  loadStories,
  loadTransactions,
  loadUserStatistic,
  moneyBoxes,
  moneyBoxesLoader,
  openStory,
  stories,
  storiesLoader,
  transactions,
  transactionsLoader,
  userStatistic,
  userStatisticLoader,
} from '../../store';
import { ICategory } from '../../models/statistics.model';
import { IMoneyBox } from '../../models/moneyBox.model';
import { ACTIONS } from '../../consts/action.const';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent implements OnInit {
  stories$ = this.store$.pipe(select(stories));
  transactions$ = this.store$.pipe(select(transactions));
  transactionsLoader$ = this.store$.pipe(select(transactionsLoader));
  storiesLoader$ = this.store$.pipe(select(storiesLoader));
  userStatisticLoader$ = this.store$.pipe(select(userStatisticLoader));
  userStatistic$ = this.store$.pipe(
    select(userStatistic),
    filter(tuiIsPresent)
  );
  isDarkMode$ = this.store$.pipe(select(isDarkMode), take(1));
  moneyBoxes$ = this.store$.pipe(select(moneyBoxes));
  moneyBoxesLoader$ = this.store$.pipe(select(moneyBoxesLoader));
  childrens$ = this.store$.pipe(select(childrens));
  childrensLoader$ = this.store$.pipe(select(childrensLoader));
  name$ = this.store$.pipe(select(name));
  role$ = this.store$.pipe(select(role));

  private destroy$ = new Subject<void>();
  ACTIONS = ACTIONS;

  themeForm = this.fb.group({
    theme: [false],
  });

  rangeForm = this.fb.group({
    range: [
      new TuiDayRange(
        TuiDay.currentLocal().append({ month: -2 }),
        TuiDay.currentLocal()
      ),
      [Validators.required],
    ],
  });

  get range(): TuiDayRange {
    return this.rangeForm.value.range;
  }

  readonly value = [40, 30];
  activeItemIndex = NaN;
  activeMoneyBoxesItemIndex = new Array(100).fill(NaN);
  private enabled = new Array(100).fill(true);
  readonly maxLength: TuiDayLike = { month: 2 };
  moneyBoxLabels = ['Собрано', 'Осталось дней: '];

  readonly xStringify$: Observable<TuiStringHandler<TuiDay>> =
    this.months$.pipe(
      map(
        (months) =>
          ({ month, day }) =>
            `${months[month]}, ${day}`
      )
    );

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder,
    @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>
  ) {}

  ngOnInit(): void {
    this.isDarkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isDarkMode) =>
        this.themeForm.get('theme')?.patchValue(isDarkMode)
      );

    this.themeForm.controls.theme.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.store$.dispatch(switchTheme()));

    this.rangeForm.controls.range.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((range: TuiDayRange) =>
        this.store$.dispatch(
          loadUserStatistic({
            from: range.from.toString(),
            to: range.to.toString(),
          })
        )
      );

    this.store$.dispatch(
      loadUserStatistic({
        from: this.range.from.toString(),
        to: this.range.to.toString(),
      })
    );

    this.store$.dispatch(loadStories());
    this.store$.dispatch(loadMoneyBoxes());
    this.store$.dispatch(loadTransactions({ filter: {} }));
    this.store$.dispatch(loadChildrens());
  }

  categories(categories: ICategory[]): readonly number[] {
    return categories.map((category) => category.sum);
  }

  userCategories(categories: ICategory[]): string[] {
    return categories.map((category) => category.name);
  }

  getCategories(categories: ICategory[]): readonly number[] {
    return this.getValue(this.categories(categories), this.enabled);
  }

  getSum(categories: ICategory[]) {
    return tuiSum(...this.categories(categories));
  }

  getMax(days: [string, number][]): number {
    return Math.max(...days.map((day) => day[1]));
  }

  convertValueLineDaysChart(
    days: [string, number][]
  ): ReadonlyArray<[TuiDay, number]> {
    return days.map((day) => [
      TuiDay.fromUtcNativeDate(new Date(day[0])),
      day[1],
    ]);
  }

  @tuiPure
  computeLabels$({ from, to }: TuiDayRange): Observable<readonly string[]> {
    return this.months$.pipe(
      map((months) =>
        Array.from(
          { length: TuiMonth.lengthBetween(from, to) + 1 },
          (_, i) => months[from.append({ month: i }).month]
        )
      )
    );
  }

  readonly yStringify: TuiStringHandler<number> = (y) => {
    return `${(10 * y).toLocaleString('ru-RU', {
      maximumFractionDigits: 0,
    })} руб`;
  };

  isEnabled(index: number): boolean {
    return this.enabled[index];
  }

  toggle(index: number): void {
    this.enabled = this.enabled.map((value, i) =>
      i === index ? !value : value
    );
  }

  onClick(index: number): void {
    this.toggle(index);
  }

  getColor(index: number): string {
    return `var(--tui-chart-${index})`;
  }

  @tuiPure
  private getValue(
    data: readonly number[],
    enabled: readonly number[]
  ): readonly number[] {
    return data.map((value, index) => (enabled[index] ? value : 0));
  }

  showStory(id: number) {
    console.log(id);
    this.store$.dispatch(openStory({ id }));
  }

  createNewTransaction() {
    this.store$.dispatch(navigateTo({ payload: { path: ['users/add'] } }));
  }

  convertImg(img: string) {
    return `url(${img}) no-repeat center top / cover`;
  }

  convertMoneyBoxProgress(moneyBox: IMoneyBox): number[] {
    const res = [];
    res.push((moneyBox.sum.fact * 100) / moneyBox.sum.plan);

    if (moneyBox.date) {
      res.push(
        (TuiDay.lengthBetween(
          TuiDay.fromLocalNativeDate(new Date(moneyBox.date.dateStart)),
          TuiDay.currentLocal()
        ) *
          100) /
          TuiDay.lengthBetween(
            TuiDay.fromLocalNativeDate(new Date(moneyBox.date.dateStart)),
            TuiDay.fromLocalNativeDate(new Date(moneyBox.date.dateEnd))
          )
      );
    }

    return res;
  }

  isMoneyBoxItemActive(idx: number, index: number): boolean {
    return this.activeMoneyBoxesItemIndex[idx] === index;
  }

  convertLegendMoneyBoxesLabel(
    idx: number,
    moneyBox: IMoneyBox
  ): string | undefined {
    if (idx == 0) {
      return `${moneyBox.sum.fact}₽/${moneyBox.sum.plan}₽`;
    } else if (moneyBox.date) {
      const range = TuiDay.lengthBetween(
        TuiDay.currentLocal(),
        TuiDay.fromLocalNativeDate(new Date(moneyBox.date.dateEnd))
      ).toString();

      return +range >= 0 ? range : '0';
    } else {
      return undefined;
    }
  }

  deleteMoneyBox(id: number) {
    this.store$.dispatch(deleteMoneyBox({ id }));
  }

  editMoneyBox(action: ACTIONS, id: number) {
    console.log(action);
    this.store$.dispatch(editMoneyBox({ id, action }));
  }

  createNewMoneyBox() {
    this.store$.dispatch(
      navigateTo({ payload: { path: ['users/money-box'] } })
    );
  }

  createNewReceipt() {
    this.store$.dispatch(addReceipt());
  }
}
