import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TuiAvatarModule, TuiIslandModule, TuiTabsModule} from '@taiga-ui/kit';
import {TuiHostedDropdownModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';
import {AccountPageComponent} from './account-page.component';
import {AccountPageRoutingModule} from './account-page.router';
import {RouterModule} from '@angular/router';

export const TUI_MODULES = [
    TuiTabsModule,
    TuiLinkModule,
    TuiHostedDropdownModule,
    TuiAvatarModule,
    TuiIslandModule,
    TuiSvgModule,
];

@NgModule({
    declarations: [AccountPageComponent],
    imports: [CommonModule, RouterModule, AccountPageRoutingModule, ...TUI_MODULES],
})
export class AccountPageModule {}
