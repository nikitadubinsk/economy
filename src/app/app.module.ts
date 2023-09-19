import { NgModule, Sanitizer } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {TUI_SANITIZER, TuiAlertModule, TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { ApiInterceptor } from './interceptors/api.interceptor';

const unsafeSanitizer: Sanitizer = {
  sanitize: (_: unknown, value: string | null): string | null => value,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {
        provide: TUI_VALIDATION_ERRORS,
        useValue: {
            required: 'Поле обязательно для заполнения',
            email: 'Введен некорректный формат адреса электронной почты',
        },
    },
    {
        provide: TUI_SANITIZER,
        useValue: unsafeSanitizer,
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
