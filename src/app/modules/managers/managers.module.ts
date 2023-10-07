import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ManagersContainerComponent } from './components/managers-container.component';
import { ManagersRouter } from './managers.router';

@NgModule({
    declarations: [ManagersContainerComponent],
    imports: [
        CommonModule,
        ManagersRouter,
        // StoreModule.forFeature(usersFeatureKey, usersReducer),
        // EffectsModule.forFeature([UsersEffects]),
    ],
})
export class ManagersModule {}
