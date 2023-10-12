import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TuiAvatarModule, TuiIslandModule, TuiTabsModule, TuiToggleModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiHostedDropdownModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation.component';


export const TUI_MODULES = [
    TuiTabsModule,
    TuiLinkModule,
    TuiHostedDropdownModule,
    TuiAvatarModule,
    TuiIslandModule,
    TuiSvgModule,
    TuiToggleModule,
    TuiButtonModule
];

@NgModule({
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...TUI_MODULES,
    ],
})
export class NavigationModule {}
