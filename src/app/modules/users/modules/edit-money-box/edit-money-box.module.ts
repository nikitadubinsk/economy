import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../store';
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
import { EditMoneyBoxComponent } from './edit-money-box.component';

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
  declarations: [EditMoneyBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class EditMoneyBoxModule {}
