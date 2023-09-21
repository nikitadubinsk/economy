import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: AppComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'auth',
                    },
                    {
                        path: 'auth',
                        loadChildren: () => import('./modules/auth-page/auth-page.module').then(m => m.AuthPageModule),
                    },
                    {
                        path: 'reset',
                        loadChildren: () => import('./modules/reset-password/reset-password.module').then(m => m.ResetPasswordModule),
                    },
                    {
                        path: 'users',
                        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
