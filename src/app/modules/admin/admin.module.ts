import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from '../shared/components/navigation/navigation.module';
import { AdminContainerComponent } from './components/admin-container.component';
import { AdminRouter } from './admin.router';

@NgModule({
  declarations: [AdminContainerComponent],
  imports: [
    CommonModule,
    AdminRouter,
    NavigationModule,
    // StoreModule.forFeature(usersFeatureKey, usersReducer),
    // EffectsModule.forFeature([UsersEffects]),
  ],
})
export class AdminModule {}
