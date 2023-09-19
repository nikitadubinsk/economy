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
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
