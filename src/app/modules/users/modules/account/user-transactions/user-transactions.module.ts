import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  TuiInputDateRangeModule,
  TuiInputModule,
  TuiPaginationModule,
} from '@taiga-ui/kit';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../../store';
import { TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core';
import { UserTransactionsComponent } from './user-transactions.component';
import { UserTransactionsRoutingModule } from './user-transactions.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiRepeatTimesModule } from '@taiga-ui/cdk';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';

export const TUI_MODULES = [
  TuiLoaderModule,
  TuiInputDateRangeModule,
  TuiInputModule,
  TuiPaginationModule,
  TuiRepeatTimesModule,
  TuiMoneyModule,
  TuiSvgModule
];

@NgModule({
  declarations: [UserTransactionsComponent],
  imports: [
    CommonModule,
    UserTransactionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UserTransactionsModule {}
