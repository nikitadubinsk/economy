import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { stories, storiesLoader } from '../../store/managers.selector';
import { loadStories } from '../../store';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent implements OnInit {
  stories$ = this.store$.pipe(select(stories));
  loader$ = this.store$.pipe(select(storiesLoader));

  order = new Map();

  constructor(private readonly store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(loadStories());
  }
}
