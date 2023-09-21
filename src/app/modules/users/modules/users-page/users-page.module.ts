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
  TuiLinkModule,
  TuiLoaderModule,
  TuiPrimitiveCheckboxModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiLetModule, TuiRepeatTimesModule } from '@taiga-ui/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
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
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersPageModule {}
