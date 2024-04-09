import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiTextAreaModule,
  TuiTextareaModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiLoaderModule,
} from '@taiga-ui/core';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { AdminCreateRateComponent } from './admin-create-rate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminCreateRateRoutingModule } from './admin-create-rate.router';
import { StoreModule } from '@ngrx/store';
import { AdminEffects, adminFeatureKey, adminReducer } from '../../store';
import { EffectsModule } from '@ngrx/effects';
import { TetriaryMenuModule } from 'src/app/modules/shared/components/tetriary-menu/tetriary-menu.module';

export const TUI_MODULES = [
  TuiButtonModule,
  TuiToggleModule,
  TuiInputModule,
  TuiTextareaModule,
  TuiFieldErrorPipeModule,
  TuiInputNumberModule,
  TuiCurrencyPipeModule,
  TuiLoaderModule,
  TuiErrorModule,
];

@NgModule({
  declarations: [AdminCreateRateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminCreateRateRoutingModule,
    TetriaryMenuModule,
    ...TUI_MODULES,
    StoreModule.forFeature(adminFeatureKey, adminReducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class AdminCreateRateModule {}
