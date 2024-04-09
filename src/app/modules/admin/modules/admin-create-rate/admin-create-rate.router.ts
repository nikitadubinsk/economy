import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreateRateComponent } from './admin-create-rate.component';

const routes: Routes = [
  {
    path: '',
    component: AdminCreateRateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCreateRateRoutingModule {}
