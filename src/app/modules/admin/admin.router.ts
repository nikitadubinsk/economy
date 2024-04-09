import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './components/admin-container.component';
import { EditAdminRateResolver } from './resolvers/edit-admin-rate.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'statistics',
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('./modules/admin-statistics/admin-statistics.module').then(
            (m) => m.AdminStatisticsModule
          ),
      },
      {
        path: 'rates',
        loadChildren: () =>
          import('./modules/admin-rates/admin-rates.module').then(
            (m) => m.AdminRatesModule
          ),
      },
      {
        path: 'rates/create',
        loadChildren: () =>
          import('./modules/admin-create-rate/admin-create-rate.module').then(
            (m) => m.AdminCreateRateModule
          ),
      },
      {
        path: 'rates/:id',
        loadChildren: () =>
          import('./modules/admin-create-rate/admin-create-rate.module').then(
            (m) => m.AdminCreateRateModule
          ),
        resolve: {
          rates: EditAdminRateResolver,
        },
      },
    ],
  },
  // {
  //     path: '**',
  //     component: PageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouter {}
