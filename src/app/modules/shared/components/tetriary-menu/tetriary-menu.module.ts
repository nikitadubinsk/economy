import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule, TuiIslandModule, TuiTabsModule } from '@taiga-ui/kit';
import {
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { TetriaryMenuComponent } from './tetriary-menu.component';

export const TUI_MODULES = [
  TuiTabsModule,
  TuiLinkModule,
  TuiHostedDropdownModule,
  TuiAvatarModule,
  TuiIslandModule,
  TuiSvgModule,
];

@NgModule({
  declarations: [TetriaryMenuComponent],
  exports: [TetriaryMenuComponent],
  imports: [CommonModule, RouterModule, ...TUI_MODULES],
})
export class TetriaryMenuModule {}
