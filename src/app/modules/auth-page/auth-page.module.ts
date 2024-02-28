import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiTabsModule,
} from '@taiga-ui/kit';
import { AuthPageComponent } from './auth-page.component';
import { AuthPageRoutingModule } from './auth-page.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects, rootFeatureKey, rootReducer } from 'src/app/store';
import { TuiValidatorModule } from '@taiga-ui/cdk';

export const TUI_MODULES = [
  TuiInputModule,
  TuiInputPasswordModule,
  TuiButtonModule,
  TuiLinkModule,
  TuiErrorModule,
  TuiValidatorModule,
  TuiFieldErrorPipeModule,
];

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
    StoreModule.forFeature(rootFeatureKey, rootReducer),
    EffectsModule.forFeature([RootEffects]),
  ],
})
export class AuthPageModule {}
