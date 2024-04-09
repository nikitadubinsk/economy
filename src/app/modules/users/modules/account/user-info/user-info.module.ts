import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { UsersEffects, usersFeatureKey, usersReducer } from '../../../store';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { UserInfoComponent } from './user-info.component';
import { UserInfoRoutingModule } from './user-info.router';
import { TuiLetModule } from '@taiga-ui/cdk';

export const TUI_MODULES = [
  TuiAvatarModule,
  TuiLoaderModule,
  TuiLetModule,
  TuiButtonModule,
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
