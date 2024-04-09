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
import { CreateMoneyBoxComponent } from './create-money-box.component';
import { CreateMoneyBoxRoutingModule } from './create-money-box.router';

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
  declarations: [CreateMoneyBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateMoneyBoxRoutingModule,
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class CreateMoneyBoxModule {}
