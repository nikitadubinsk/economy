import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccountPageComponent } from './account-page.component';


const routes: Routes = [
    {
        path: '',
        component: AccountPageComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('../user-info/user-info.module').then(
                        m => m.UserInfoModule
                    ),
            },
            {
                path: 'transactions',
                loadChildren: () =>
                    import('../user-transactions/user-transactions.module').then(
                        m => m.UserTransactionsModule
                    ),
            },
            // {
            //     path: 'rating',
            //     loadChildren: () =>
            //         import('../user-raiting/user-raiting.module').then(
            //             m => m.UserAwardsModule
            //         ),
            // },
            // {
            //     path: 'transaction',
            //     loadChildren: () =>
            //         import('../user-transaction/user-transaction.module').then(
            //             m => m.UserTransactionsModule
            //         ),
            // },
            // {
            //     path: 'liked',
            //     loadChildren: () =>
            //         import('../user-liked-cards/user-liked-cards.module').then(
            //             m => m.UserLikedCardsModule
            //         ),
            // },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountPageRoutingModule {}
