import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { TuiAvatarModule} from '@taiga-ui/kit';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../../store';
import { TuiLoaderModule } from '@taiga-ui/core';
import { UserInfoComponent } from './user-info.component';
import { UserInfoRoutingModule } from './user-info.router';

export const TUI_MODULES = [
    TuiAvatarModule,
    TuiLoaderModule
];

@NgModule({
    declarations: [UserInfoComponent],
    imports: [
        CommonModule,
        UserInfoRoutingModule,
        ...TUI_MODULES,
        StoreModule.forFeature(usersFeatureKey, usersReducer),
        EffectsModule.forFeature([UsersEffects]),
    ],
})
export class UserInfoModule {}
