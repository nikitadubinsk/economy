import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiAvatarModule,
  TuiIslandModule,
  TuiTabsModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoryComponent } from './story.component';

export const TUI_MODULES = [
  TuiTabsModule,
  TuiLinkModule,
  TuiHostedDropdownModule,
  TuiAvatarModule,
  TuiIslandModule,
  TuiSvgModule,
  TuiToggleModule,
  TuiButtonModule,
];

@NgModule({
  declarations: [StoryComponent],
  exports: [StoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...TUI_MODULES,
  ],
})
export class StoryModule {}
