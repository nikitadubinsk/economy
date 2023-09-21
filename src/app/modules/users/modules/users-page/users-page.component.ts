import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Inject,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
import { filter, map, startWith, take, takeUntil } from 'rxjs/operators';
import { isDarkMode, switchTheme } from 'src/app/store';
import {
  loadStories,
  loadUserStatistic,
  openCreateNewTransactionPopup,
  openStory,
  stories,
  storiesLoader,
  userStatistic,
  userStatisticLoader,
} from '../../store';
import { ICategory } from '../../models/statistics.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent implements OnInit {
  stories$ = this.store$.pipe(select(stories));
  storiesLoader$ = this.store$.pipe(select(storiesLoader));
  userStatisticLoader$ = this.store$.pipe(select(userStatisticLoader));
  userStatistic$ = this.store$.pipe(
    select(userStatistic),
    filter(tuiIsPresent)
  );
  isDarkMode$ = this.store$.pipe(select(isDarkMode), take(1));

  private destroy$ = new Subject<void>();

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

  private enabled = new Array(100).fill(true);

  readonly maxLength: TuiDayLike = { month: 2 };

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
    private readonly fb: FormBuilder,
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
    console.log("AAAA")
    return `${(10 * y).toLocaleString('en-US', { maximumFractionDigits: 0 })} $`;
  }
    

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
    this.store$.dispatch(openStory({ id }));
  }

  createNewTransaction() {
    this.store$.dispatch(openCreateNewTransactionPopup());
  }

  convertImg(img: string) {
    return `url(${img}) no-repeat center top / cover`;
  }
}
