import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRatesComponent } from './admin-rates.component';

const routes: Routes = [
  {
    path: '',
    component: AdminRatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRatesRoutingModule {}
