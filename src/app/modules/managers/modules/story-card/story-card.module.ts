import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiArcChartModule,
  TuiAxesModule,
  TuiBarChartModule,
  TuiLegendItemModule,
  TuiRingChartModule,
} from '@taiga-ui/addon-charts';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiLoaderModule,
} from '@taiga-ui/core';
import { StoryModule } from 'src/app/modules/shared/components/story/story.module';
import {
  ManagersEffects,
  managersFeatureKey,
  managersReducer,
} from '../../store';
import { TuiIslandModule, TuiToggleModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoryCardComponent } from './story-card.component';

export const TUI_MODULES = [
  TuiArcChartModule,
  TuiRingChartModule,
  TuiMoneyModule,
  TuiLegendItemModule,
  TuiLetModule,
  TuiLoaderModule,
  TuiBarChartModule,
  TuiAxesModule,
  TuiIslandModule,
  TuiButtonModule,
  TuiToggleModule,
  TuiGroupModule,
];

@NgModule({
  declarations: [StoryCardComponent],
  exports: [StoryCardComponent],
  imports: [
    CommonModule,
    StoryModule,
    FormsModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
    StoreModule.forFeature(managersFeatureKey, managersReducer),
    EffectsModule.forFeature([ManagersEffects]),
  ],
})
export class StoryCardModule {}
