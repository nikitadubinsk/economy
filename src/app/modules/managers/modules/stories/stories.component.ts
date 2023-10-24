import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { isChangeEntity, stories, loader } from '../../store/managers.selector';
import {
  activeStory,
  changeWeightStories,
  deleteStory,
  editStory,
  loadStories,
} from '../../store';
import { IStoryManagerInfo } from '../../../../models/story.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { STORY_CATEGORIES } from '../../consts/categories.const';
import { FormBuilder } from '@angular/forms';
import { navigateTo } from 'src/app/store';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent implements OnInit {
  stories$ = this.store$.pipe(select(stories));
  loader$ = this.store$.pipe(select(loader));
  isChangeEntity$ = this.store$.pipe(select(isChangeEntity));

  stories: IStoryManagerInfo[] = [];

  categories = STORY_CATEGORIES;

  storyForm = this.fb.group({
    title: [''],
    category: [1],
  });

  constructor(
    private readonly store$: Store,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(loadStories());
  }

  onDragDropStories({ previousIndex, currentIndex }: CdkDragDrop<any>) {
    this.store$.dispatch(
      changeWeightStories({ indexFrom: previousIndex, indexTo: currentIndex })
    );
  }

  deleteStory(id: number) {
    this.store$.dispatch(deleteStory({ id }));
  }

  editStory(story: IStoryManagerInfo) {
    this.store$.dispatch(editStory({ story }));
  }

  openStory(id: number) {
    this.store$.dispatch(
      navigateTo({ payload: { path: [`/managers/story/${id}`] } })
    );
  }

  activeStory(args: { id: number; active: boolean }) {
    this.store$.dispatch(activeStory({ id: args.id, active: args.active }));
  }
}
