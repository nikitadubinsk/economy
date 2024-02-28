import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditChapterComponent } from './edit-chapter.component';

const routes: Routes = [
  {
    path: '',
    component: EditChapterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditChapterRoutingModule {}
