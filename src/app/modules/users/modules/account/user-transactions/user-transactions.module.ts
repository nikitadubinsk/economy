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
import { TuiButtonModule, TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core';
import { UserTransactionsComponent } from './user-transactions.component';
import { UserTransactionsRoutingModule } from './user-transactions.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiRepeatTimesModule } from '@taiga-ui/cdk';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { StubModule } from 'src/app/modules/shared/components/stub/stub.module';

export const TUI_MODULES = [
  TuiLoaderModule,
  TuiInputDateRangeModule,
  TuiInputModule,
  TuiPaginationModule,
  TuiRepeatTimesModule,
  TuiMoneyModule,
  TuiSvgModule,
  TuiButtonModule,
];

@NgModule({
  declarations: [UserTransactionsComponent],
  imports: [
    CommonModule,
    UserTransactionsRoutingModule,
    FormsModule,
    StubModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UserTransactionsModule {}
