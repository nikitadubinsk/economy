import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailingPageComponent } from './mailing-page.component';

const routes: Routes = [
  {
    path: '',
    component: MailingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailingPageRoutingModule {}
