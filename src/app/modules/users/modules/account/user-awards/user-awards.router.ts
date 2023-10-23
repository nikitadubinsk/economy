import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAwardsComponent } from './user-awards.component';

const routes: Routes = [
  {
    path: '',
    component: UserAwardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAwardsRoutingModule {}
