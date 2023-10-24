import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryInfoComponent } from './story-info.component';

const routes: Routes = [
  {
    path: '',
    component: StoryInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryInfoRoutingModule {}
