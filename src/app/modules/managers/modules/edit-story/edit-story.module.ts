import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiGroupModule,
  TuiLoaderModule,
} from '@taiga-ui/core';
import { StoryModule } from 'src/app/modules/shared/components/story/story.module';
import {
  ManagersEffects,
  managersFeatureKey,
  managersReducer,
} from '../../store';
import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiIslandModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStoryComponent } from './edit-story.component';

export const TUI_MODULES = [
  TuiLetModule,
  TuiLoaderModule,
  TuiIslandModule,
  TuiButtonModule,
  TuiToggleModule,
  TuiGroupModule,
  TuiErrorModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
];

@NgModule({
  declarations: [EditStoryComponent],
  exports: [EditStoryComponent],
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
export class EditStoryModule {}
