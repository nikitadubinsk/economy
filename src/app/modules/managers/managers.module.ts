import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersContainerComponent } from './components/managers-container.component';
import { ManagersRouter } from './managers.router';
import { NavigationModule } from '../shared/components/navigation/navigation.module';
import { ManagersEffects, managersFeatureKey, managersReducer } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoryModule } from '../shared/components/story/story.module';

@NgModule({
  declarations: [ManagersContainerComponent],
  imports: [
    CommonModule,
    ManagersRouter,
    NavigationModule,
    StoryModule,
    StoreModule.forFeature(managersFeatureKey, managersReducer),
    EffectsModule.forFeature([ManagersEffects]),
  ],
})
export class ManagersModule {}
