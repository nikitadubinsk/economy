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
import { CreateTransactionComponent } from './create-transaction.component';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiErrorModule,
  TuiHintModule,
  TuiLoaderModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { CreateTractionRoutingModule } from './create-transaction.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  declarations: [CreateTransactionComponent],
  imports: [
    CommonModule,
    CreateTractionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class CreateTransactionModule {}
