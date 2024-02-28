import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  addChildren,
  childrenLoaderStatistics,
  childrenStatistics,
  childrens,
  childrensLoader,
  deleteChildren,
  loadChildrenStatistics,
  loadChildrens,
} from '../../../store';
import { IChildrenCategory } from '../../../models/statistics.model';
import { tuiPure } from '@taiga-ui/cdk';

@Component({
  selector: 'app-user-children',
  templateUrl: './user-children.component.html',
  styleUrls: ['./user-children.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserChildrenComponent implements OnInit {
  childrens$ = this.store$.pipe(select(childrens));
  loader$ = this.store$.pipe(select(childrensLoader));
  statistics$ = this.store$.pipe(select(childrenStatistics));
  loaderStatistics$ = this.store$.pipe(select(childrenLoaderStatistics));

  private enabled = new Array(100).fill(true);

  constructor(private readonly store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(loadChildrens());
  }

  deleteChildren(id: number, event: Event) {
    event.stopPropagation();
    this.store$.dispatch(deleteChildren({ id }));
  }

  loadChildStatistics(id: number) {
    this.store$.dispatch(loadChildrenStatistics({ id }));
  }

  getCategories(categories: IChildrenCategory[]): readonly number[] {
    return this.getValue(this.categories(categories), this.enabled);
  }

  categories(categories: IChildrenCategory[]): readonly number[] {
    return categories.map((category) => category.percent);
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

  childCategories(categories: IChildrenCategory[]): string[] {
    return categories.map((category) => category.name);
  }

  addChildren() {
    this.store$.dispatch(addChildren());
  }
}
