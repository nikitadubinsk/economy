import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { isDarkMode } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isDarkMode$ = this.store$.pipe(select(isDarkMode));

  constructor(private readonly store$: Store) {}
}
