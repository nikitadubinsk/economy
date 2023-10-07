import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageComponent } from './users-page.component';
import { UsersPageRoutingModule } from './users-page.router';
import {
  TuiActionModule,
  TuiAvatarModule,
  TuiInputDateRangeModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiProgressModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiPrimitiveCheckboxModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiLetModule, TuiRepeatTimesModule } from '@taiga-ui/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiArcChartModule,
  TuiAxesModule,
  TuiLegendItemModule,
  TuiLineChartModule,
  TuiLineDaysChartModule,
  TuiRingChartModule,
} from '@taiga-ui/addon-charts';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../store';
import { StoryCardModule } from '../story-card/story-card.module';
import { CreateTransactionModule } from '../create-transaction/create-transaction.module';
import { EditMoneyBoxModule } from '../edit-money-box/edit-money-box.module';
import { UserInfoModule } from '../account/user-info/user-info.module';
import { UserTransactionsModule } from '../account/user-transactions/user-transactions.module';
import { CreateMoneyBoxModule } from '../create-money-box/create-money-box.module';

export const TUI_MODULES = [
  TuiActionModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiLoaderModule,
  TuiAvatarModule,
  TuiLinkModule,
  TuiLetModule,
  TuiToggleModule,
  TuiButtonModule,
  TuiLegendItemModule,
  TuiRingChartModule,
  TuiPrimitiveCheckboxModule,
  TuiMoneyModule,
  TuiSvgModule,
  TuiAxesModule,
  TuiLineChartModule,
  TuiProgressModule,
  TuiInputDateRangeModule,
  TuiLineDaysChartModule,
  TuiRepeatTimesModule,
  TuiGroupModule,
  TuiArcChartModule,
];

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoryCardModule,
    CreateTransactionModule,
    EditMoneyBoxModule,
    UserInfoModule,
    UserTransactionsModule,
    CreateMoneyBoxModule,
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersPageModule {}
