import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TuiInputModule, TuiInputPasswordModule, TuiTabsModule} from '@taiga-ui/kit';
import {AuthPageComponent} from './auth-page.component';
import {AuthPageRoutingModule} from './auth-page.router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule, TuiErrorModule, TuiLinkModule} from '@taiga-ui/core';

export const TUI_MODULES = [
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiErrorModule,
];

@NgModule({
    declarations: [AuthPageComponent],
    imports: [
        CommonModule,
        AuthPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ...TUI_MODULES,
    ],
})
export class AuthPageModule {}
