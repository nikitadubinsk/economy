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
import { TuiLoaderModule } from '@taiga-ui/core';
import { UserTransactionsComponent } from './user-transactions.component';
import { UserTransactionsRoutingModule } from './user-transactions.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiRepeatTimesModule } from '@taiga-ui/cdk';

export const TUI_MODULES = [
  TuiLoaderModule,
  TuiInputDateRangeModule,
  TuiInputModule,
  TuiPaginationModule,
  TuiRepeatTimesModule,
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
