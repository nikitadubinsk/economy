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
import { StoryInfoComponent } from './story-info.component';
import { StoryInfoRoutingModule } from './story-info.router';
import { ChapterCardModule } from '../chapter-card/chapter-card.module';

export const TUI_MODULES = [
  TuiLoaderModule,
  TuiIslandModule,
  TuiGroupModule,
  TuiButtonModule,
  TuiToggleModule,
];

@NgModule({
  declarations: [StoryInfoComponent],
  imports: [
    CommonModule,
    StoryInfoRoutingModule,
    TetriaryMenuModule,
    StoryModule,
    FormsModule,
    ReactiveFormsModule,
    StoryCardModule,
    DragDropModule,
    EditStoryModule,
    ChapterCardModule,
    ...TUI_MODULES,
    StoreModule.forFeature(managersFeatureKey, managersReducer),
    EffectsModule.forFeature([ManagersEffects]),
  ],
})
export class StoryInfoModule {}
