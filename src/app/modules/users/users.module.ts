import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRouter } from './users.router';
import { UsersContainerComponent } from './components/users-container.component';
import { UsersEffects, usersFeatureKey, usersReducer } from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersContainerComponent],
  imports: [
    CommonModule,
    UsersRouter,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersModule {}
