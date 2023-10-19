import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { TuiAccordionModule, TuiAvatarModule, TuiProgressModule} from '@taiga-ui/kit';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../../store';
import { TuiButtonModule, TuiLoaderModule, TuiPrimitiveCheckboxModule } from '@taiga-ui/core';
import { UserChildrenComponent } from './user-children.component';
import { UserChildrenRoutingModule } from './user-children.router';
import { TuiLetModule, TuiRepeatTimesModule } from '@taiga-ui/cdk';
import { TuiLegendItemModule, TuiRingChartModule } from '@taiga-ui/addon-charts';
import { AddChildrenModule } from '../../add-children/add-children.module';

export const TUI_MODULES = [
    TuiAvatarModule,
    TuiLoaderModule,
    TuiAccordionModule,
    TuiButtonModule,
    TuiProgressModule,
    TuiLetModule,
    TuiRingChartModule,
    TuiLegendItemModule,
    TuiPrimitiveCheckboxModule,
    TuiRepeatTimesModule
];

@NgModule({
    declarations: [UserChildrenComponent],
    imports: [
        CommonModule,
        UserChildrenRoutingModule,
        AddChildrenModule,
        ...TUI_MODULES,
        StoreModule.forFeature(usersFeatureKey, usersReducer),
        EffectsModule.forFeature([UsersEffects]),
    ],
})
export class UserChildrenModule {}
