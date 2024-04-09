import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRatesComponent } from './admin-rates.component';
import { AdminRatesRoutingModule } from './admin-rates.router';
import { TuiIslandModule, TuiToggleModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { AdminRateCardModule } from '../admin-rate-card/admin-rate-card.module';
import { AdminEffects, adminFeatureKey, adminReducer } from '../../store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TetriaryMenuModule } from 'src/app/modules/shared/components/tetriary-menu/tetriary-menu.module';

export const TUI_MODULES = [
  TuiIslandModule,
  TuiButtonModule,
  TuiToggleModule,
  TuiLoaderModule,
];

@NgModule({
  declarations: [AdminRatesComponent],
  imports: [
    CommonModule,
    AdminRatesRoutingModule,
    TetriaryMenuModule,
    AdminRateCardModule,
    ...TUI_MODULES,
    StoreModule.forFeature(adminFeatureKey, adminReducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class AdminRatesModule {}
