import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule, TuiToggleModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { AdminRateCardComponent } from './admin-rate-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects, adminFeatureKey, adminReducer } from '../../store';

export const TUI_MODULES = [TuiIslandModule, TuiButtonModule, TuiToggleModule];

@NgModule({
  declarations: [AdminRateCardComponent],
  exports: [AdminRateCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...TUI_MODULES,
    StoreModule.forFeature(adminFeatureKey, adminReducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class AdminRateCardModule {}
