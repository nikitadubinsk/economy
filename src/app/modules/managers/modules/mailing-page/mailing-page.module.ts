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
import { StubModule } from 'src/app/modules/shared/components/stub/stub.module';
import { MailingPageComponent } from './mailing-page.component';
import { MailingPageRoutingModule } from './mailing-page.router';

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
  declarations: [MailingPageComponent],
  imports: [
    CommonModule,
    MailingPageRoutingModule,
    TetriaryMenuModule,
    StoryModule,
    FormsModule,
    ReactiveFormsModule,
    StoryCardModule,
    StubModule,
    DragDropModule,
    EditStoryModule,
    ...TUI_MODULES,
    StoreModule.forFeature(managersFeatureKey, managersReducer),
    EffectsModule.forFeature([ManagersEffects]),
  ],
})
export class MailingPageModule {}
