import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../../store';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { UserAwardsComponent } from './user-awards.component';
import { UserAwardsRoutingModule } from './user-awards.router';

export const TUI_MODULES = [TuiAvatarModule, TuiLoaderModule, TuiLetModule];

@NgModule({
  declarations: [UserAwardsComponent],
  imports: [
    CommonModule,
    UserAwardsRoutingModule,
    ...TUI_MODULES,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UserAwardsModule {}
