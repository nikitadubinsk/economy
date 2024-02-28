import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserChildrenComponent } from './user-children.component';

const routes: Routes = [
  {
    path: '',
    component: UserChildrenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserChildrenRoutingModule {}
