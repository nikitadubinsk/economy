import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageCanLoadGuard } from './resolvers/page-can-load.guard';
import { AuthPageComponent } from './modules/auth-page/auth-page.component';

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
            loadChildren: () =>
              import('./modules/auth-page/auth-page.module').then(
                (m) => m.AuthPageModule
              ),
          },
          {
            path: 'reset',
            loadChildren: () =>
              import('./modules/reset-password/reset-password.module').then(
                (m) => m.ResetPasswordModule
              ),
          },
          {
            path: 'users',
            loadChildren: () =>
              import('./modules/users/users.module').then((m) => m.UsersModule),
            canLoad: [PageCanLoadGuard],
            data: {
              roles: ['Родитель', 'Ребенок'],
            },
          },
          {
            path: 'managers',
            loadChildren: () =>
              import('./modules/managers/managers.module').then(
                (m) => m.ManagersModule
              ),
            canLoad: [PageCanLoadGuard],
            data: {
              roles: ['Оператор'],
            },
          },
          {
            path: 'admin',
            loadChildren: () =>
              import('./modules/admin/admin.module').then((m) => m.AdminModule),
            canLoad: [PageCanLoadGuard],
            data: {
              roles: ['Администратор'],
            },
          },
          {
            path: 'registration',
            loadChildren: () =>
              import(
                './modules/registration-page/registration-page.module'
              ).then((m) => m.RegistrationPageModule),
          },
        ],
      },
      {
        path: '**',
        component: AuthPageComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
