import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TUI_IS_ANDROID, TUI_IS_IOS } from '@taiga-ui/cdk';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { switchTheme } from 'src/app/store';

export interface IMenu {
  name: string;
  route: string;
}
export interface IUseRInfo {
  name: string;
  position: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  providers: [
    {
      provide: TUI_IS_IOS,
      useValue: false,
    },
    {
      provide: TUI_IS_ANDROID,
      useValue: false,
    },
  ],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() items: IMenu[] = [];
  @Input() title: string = 'Административная панель';
  @Input() userInfo!: IUseRInfo;

  @Output() logout = new EventEmitter<void>();

  private destroy$ = new Subject<void>();

  themeForm = this.fb.group({
    theme: [false],
  });

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.themeForm.controls.theme.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.store$.dispatch(switchTheme()));
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
