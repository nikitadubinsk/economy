import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';
import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password.router';

export const TUI_MODULES = [
  TuiInputModule,
  TuiErrorModule,
  TuiButtonModule,
  TuiLinkModule,
];

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
  ],
})
export class ResetPasswordModule {}
