import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { TuiAvatarModule} from '@taiga-ui/kit';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../../store';
import { TuiLoaderModule } from '@taiga-ui/core';
import { UserChildrenComponent } from './user-children.component';
import { UserChildrenRoutingModule } from './user-children.router';

export const TUI_MODULES = [
    TuiAvatarModule,
    TuiLoaderModule
];

@NgModule({
    declarations: [UserChildrenComponent],
    imports: [
        CommonModule,
        UserChildrenRoutingModule,
        ...TUI_MODULES,
        StoreModule.forFeature(usersFeatureKey, usersReducer),
        EffectsModule.forFeature([UsersEffects]),
    ],
})
export class UserChildrenModule {}
