import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {UsersRouter} from './users.router';
import { UsersContainerComponent } from './components/users-container.component';

@NgModule({
    declarations: [UsersContainerComponent],
    imports: [
        CommonModule,
        UsersRouter,
        // StoreModule.forFeature(usersFeatureKey, usersReducer),
        // EffectsModule.forFeature([UsersEffects]),
    ],
})
export class UsersModule {}
