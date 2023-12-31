import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiArcChartModule,
  TuiAxesModule,
  TuiBarChartModule,
  TuiLegendItemModule,
  TuiRingChartModule,
} from '@taiga-ui/addon-charts';

import { TetriaryMenuModule } from 'src/app/modules/shared/components/tetriary-menu/tetriary-menu.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiLoaderModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { StoriesComponent } from './stories.component';
import { StoriesRoutingModule } from './stories.router';
import { StoryModule } from 'src/app/modules/shared/components/story/story.module';
import {
  ManagersEffects,
  managersFeatureKey,
  managersReducer,
} from '../../store';
import {
  TuiInputModule,
  TuiIslandModule,
  TuiRadioBlockModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoryCardModule } from '../story-card/story-card.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditStoryModule } from '../edit-story/edit-story.module';

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
  TuiInputModule,
  TuiGroupModule,
  TuiRadioBlockModule,
  TuiTextfieldControllerModule,
];

@NgModule({
  declarations: [StoriesComponent],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    TetriaryMenuModule,
    StoryModule,
    FormsModule,
    ReactiveFormsModule,
    StoryCardModule,
    DragDropModule,
    EditStoryModule,
    ...TUI_MODULES,
    StoreModule.forFeature(managersFeatureKey, managersReducer),
    EffectsModule.forFeature([ManagersEffects]),
  ],
})
export class StoriesModule {}
