import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagersContainerComponent } from './components/managers-container.component';
import { ChaptersResolver } from './resolvers/chapters.resolver';
import { ChapterResolver } from './resolvers/chapter.resolver';
import { StoryResolver } from './resolvers/story.resolver';

const routes: Routes = [
  {
    path: '',
    component: ManagersContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/stories/stories.module').then(
            (m) => m.StoriesModule
          ),
      },
      {
        path: 'mailing',
        loadChildren: () =>
          import('./modules/mailing-page/mailing-page.module').then(
            (m) => m.MailingPageModule
          ),
      },
      {
        path: 'story/:id',
        loadChildren: () =>
          import('./modules/story-info/story-info.module').then(
            (m) => m.StoryInfoModule
          ),
        resolve: {
          chapters: ChaptersResolver,
        },
      },
      {
        path: 'story/:id/:chapterId',
        loadChildren: () =>
          import('./modules/edit-chapter/edit-chapter.module').then(
            (m) => m.EditChapterModule
          ),
        resolve: {
          chapter: ChapterResolver,
        },
      },
      {
        path: 'story/:id/create',
        loadChildren: () =>
          import('./modules/edit-chapter/edit-chapter.module').then(
            (m) => m.EditChapterModule
          ),
      },
      {
        path: ':id/edit',
        loadChildren: () =>
          import('./modules/edit-story/edit-story.module').then(
            (m) => m.EditStoryModule
          ),
        resolve: {
          story: StoryResolver,
        },
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./modules/edit-story/edit-story.module').then(
            (m) => m.EditStoryModule
          ),
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
export class ManagersRouter {}
