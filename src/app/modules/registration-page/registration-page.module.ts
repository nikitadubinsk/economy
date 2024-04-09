import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  TuiCalendarMonthModule,
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPasswordModule,
  TuiSelectModule,
  TuiTextareaModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiCalendarModule,
  TuiDataListModule,
  TuiErrorModule,
  TuiLinkModule,
} from '@taiga-ui/core';
import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationPageRoutingModule } from './registration-page.router';
import { RootEffects, rootFeatureKey, rootReducer } from 'src/app/store';

export const TUI_MODULES = [
  TuiInputModule,
  TuiInputPasswordModule,
  TuiButtonModule,
  TuiTextareaModule,
  TuiInputDateModule,
  TuiCalendarModule,
  TuiCalendarMonthModule,
  TuiLinkModule,
  TuiSelectModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiInputNumberModule,
  TuiToggleModule,
  TuiFieldErrorPipeModule,
  TuiErrorModule,
];

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
    StoreModule.forFeature(rootFeatureKey, rootReducer),
    EffectsModule.forFeature([RootEffects]),
  ],
})
export class RegistrationPageModule {}
