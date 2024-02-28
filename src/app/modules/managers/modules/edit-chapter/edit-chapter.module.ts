import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiErrorModule,
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
  TuiCheckboxBlockModule,
  TuiCheckboxModule,
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule,
  TuiFilesModule,
  TuiInputFilesModule,
  TuiInputModule,
  TuiIslandModule,
  TuiRadioBlockModule,
  TuiRadioModule,
  TuiSelectModule,
  TuiTextareaModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditChapterComponent } from './edit-chapter.component';
import { EditChapterRoutingModule } from './edit-chapter.router';
import { TetriaryMenuModule } from 'src/app/modules/shared/components/tetriary-menu/tetriary-menu.module';

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
  TuiSelectModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiTextfieldControllerModule,
  TuiTextareaModule,
  TuiCheckboxBlockModule,
  TuiCheckboxModule,
  TuiRadioModule,
  TuiRadioBlockModule,
  TuiInputFilesModule,
  TuiFilesModule,
];

@NgModule({
  declarations: [EditChapterComponent],
  exports: [EditChapterComponent],
  imports: [
    CommonModule,
    StoryModule,
    FormsModule,
    ReactiveFormsModule,
    EditChapterRoutingModule,
    TetriaryMenuModule,
    ...TUI_MODULES,
    StoreModule.forFeature(managersFeatureKey, managersReducer),
    EffectsModule.forFeature([ManagersEffects]),
  ],
})
export class EditChapterModule {}
