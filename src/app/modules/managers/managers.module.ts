import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ManagersContainerComponent } from './components/managers-container.component';
import { ManagersRouter } from './managers.router';
import { NavigationModule } from '../shared/components/navigation/navigation.module';

@NgModule({
    declarations: [ManagersContainerComponent],
    imports: [
        CommonModule,
        ManagersRouter,
        NavigationModule,
        // StoreModule.forFeature(usersFeatureKey, usersReducer),
        // EffectsModule.forFeature([UsersEffects]),
    ],
})
export class ManagersModule {}
