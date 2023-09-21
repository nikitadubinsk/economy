import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../store';
import { TuiInputModule, TuiProgressModule} from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import { CreateTransactionComponent } from './create-transaction.component';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';

export const TUI_MODULES = [
    TuiProgressModule,
    TuiLetModule,
    TuiInputModule,
    TuiTextfieldControllerModule
];

@NgModule({
    declarations: [CreateTransactionComponent],
    imports: [
        CommonModule,
        ...TUI_MODULES,
        StoreModule.forFeature(usersFeatureKey, usersReducer),
        EffectsModule.forFeature([UsersEffects]),
    ],
})
export class CreateTransactionModule {}
