import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { isDarkMode, loadPeopleInfo } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  isDarkMode$ = this.store$.pipe(select(isDarkMode));

  constructor(private readonly store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(loadPeopleInfo());
  }
}
