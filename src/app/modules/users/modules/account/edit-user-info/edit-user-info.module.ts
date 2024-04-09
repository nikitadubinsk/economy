import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  TuiFieldErrorPipeModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiProgressModule,
  TuiSelectModule,
  TuiTextareaModule,
} from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiErrorModule,
  TuiHintModule,
  TuiLoaderModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserInfoComponent } from './edit-user-info.component';
import { EditUserInfoRoutingModule } from './edit-user-info.router';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../../store';

export const TUI_MODULES = [
  TuiProgressModule,
  TuiLetModule,
  TuiInputModule,
  TuiTextfieldControllerModule,
  TuiErrorModule,
  TuiFieldErrorPipeModule,
  TuiHintModule,
  TuiSelectModule,
  TuiDataListModule,
  TuiLoaderModule,
  TuiInputDateModule,
  TuiTextareaModule,
  TuiButtonModule,
  TuiInputNumberModule,
];

@NgModule({
  declarations: [EditUserInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditUserInfoRoutingModule,
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class EditUserInfoModule {}
