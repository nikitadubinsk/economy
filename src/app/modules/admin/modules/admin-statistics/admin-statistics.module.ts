import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TuiArcChartModule, TuiAxesModule, TuiBarChartModule, TuiLegendItemModule, TuiRingChartModule} from '@taiga-ui/addon-charts';

import { AdminStatisticsComponent } from './admin-statistics.component';
import { AdminStatisticsRoutingModule } from './admin-statistics.router';
import { TetriaryMenuModule } from 'src/app/modules/shared/components/tetriary-menu/tetriary-menu.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiLoaderModule } from '@taiga-ui/core';
import { AdminEffects, adminFeatureKey, adminReducer } from '../../store';

export const TUI_MODULES = [
    TuiArcChartModule,
    TuiRingChartModule,
    TuiMoneyModule,
    TuiLegendItemModule,
    TuiLetModule,
    TuiLoaderModule,
    TuiBarChartModule,
    TuiAxesModule,
];

@NgModule({
    declarations: [AdminStatisticsComponent],
    imports: [
        CommonModule,
        AdminStatisticsRoutingModule,
        TetriaryMenuModule,
        ...TUI_MODULES,
        StoreModule.forFeature(adminFeatureKey, adminReducer),
        EffectsModule.forFeature([AdminEffects]),
    ],
})
export class AdminStatisticsModule {}
