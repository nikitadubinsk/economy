import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsersContainerComponent } from './components/users-container.component';
import { UsersPageComponent } from './modules/users-page/users-page.component';

const routes: Routes = [
    {
        path: '',
        component: UsersContainerComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./modules/users-page/users-page.module').then(
                        m => m.UsersPageModule
                    ),
            },
            {
                path: 'add',
                loadChildren: () =>
                    import('./modules/create-transaction/create-transaction.module').then(
                        m => m.CreateTransactionModule
                    ),
            },
            // {
            //     path: 'section/:chapterId',
            //     loadChildren: () =>
            //         import('./modules/articles/section-page/section-page.module').then(
            //             m => m.SectionPageModule
            //         ),
            // },
            // {
            //     path: 'section/:chapterId/:sectionId',
            //     loadChildren: () =>
            //         import('./modules/articles/article-page/article-page.module').then(
            //             m => m.ArticlePageModule
            //         ),
            // },
            {
                path: 'account',
                loadChildren: () =>
                    import('./modules/account/account-page/account-page.module').then(
                        m => m.AccountPageModule
                    ),
            },
        ],
    },
    {
        path: '**',
        component: UsersPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRouter {}
