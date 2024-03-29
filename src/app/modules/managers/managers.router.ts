import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagersContainerComponent } from './components/managers-container.component';
import { ChaptersResolver } from './resolvers/chapters.resolver';

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
      // {
      //     path: 'account',
      //     loadChildren: () =>
      //         import('./modules/account/account-page/account-page.module').then(
      //             m => m.AccountPageModule
      //         ),
      // },
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
