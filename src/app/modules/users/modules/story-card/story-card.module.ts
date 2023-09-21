import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../store';
import { TuiProgressModule} from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import { StoryCardComponent } from './story-card.component';
import { TuiLoaderModule } from '@taiga-ui/core';

export const TUI_MODULES = [
    TuiProgressModule,
    TuiLetModule,
    TuiLoaderModule
];

@NgModule({
    declarations: [StoryCardComponent],
    imports: [
        CommonModule,
        ...TUI_MODULES,
        StoreModule.forFeature(usersFeatureKey, usersReducer),
        EffectsModule.forFeature([UsersEffects]),
    ],
})
export class StoryCardModule {}
