import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../user-info/user-info.module').then((m) => m.UserInfoModule),
      },
      {
        path: 'edit',
        loadChildren: () =>
          import('../edit-user-info/edit-user-info.module').then(
            (m) => m.EditUserInfoModule
          ),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('../user-transactions/user-transactions.module').then(
            (m) => m.UserTransactionsModule
          ),
      },
      {
        path: 'childrens',
        loadChildren: () =>
          import('../user-children/user-children.module').then(
            (m) => m.UserChildrenModule
          ),
      },
      {
        path: 'awards',
        loadChildren: () =>
          import('../user-awards/user-awards.module').then(
            (m) => m.UserAwardsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
