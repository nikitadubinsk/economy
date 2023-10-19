import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminContainerComponent } from './components/admin-container.component';

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
                    import('./modules/admin-statistics/admin-statistics.module').then(m => m.AdminStatisticsModule),
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
