import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  isChangeEntity,
  stories,
  loader,
  loaderButton,
} from '../../store/managers.selector';
import {
  activeStory,
  changeWeightStories,
  deleteStory,
  editStory,
  loadStories,
  saveNewWeight,
} from '../../store';
import { IStoryManagerInfo } from '../../../../models/story.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { STORY_CATEGORIES } from '../../consts/categories.const';
import { UntypedFormBuilder } from '@angular/forms';
import { navigateTo } from 'src/app/store';
import { Subject, combineLatest } from 'rxjs';
import { debounceTime, filter, map, takeUntil } from 'rxjs/operators';
import { tuiIsPresent } from '@taiga-ui/cdk';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent implements OnInit, OnDestroy {
  stories$ = this.store$.pipe(select(stories));
  loader$ = this.store$.pipe(select(loader));
  isChangeEntity$ = this.store$.pipe(select(isChangeEntity));
  loaderButton$ = this.store$.pipe(select(loaderButton), filter(tuiIsPresent));

  stories: IStoryManagerInfo[] = [];

  isShowStub$ = combineLatest([this.stories$, this.loader$]).pipe(
    map(([stories, loader]) => !stories.length && !loader)
  );

  categories = STORY_CATEGORIES;

  storyForm = this.fb.group({
    title: [''],
    category: [1],
  });

  private destroy$ = new Subject<void>();

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(loadStories({ filters: { category: 1 } }));

    this.storyForm.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(300))
      .subscribe((filters) => {
        this.store$.dispatch(
          loadStories({
            filters: {
              title: filters.title || undefined,
              category: filters.category,
            },
          })
        );
      });
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
    this.store$.dispatch(
      navigateTo({ payload: { path: [`/managers/${story.id}/edit`] } })
    );
  }

  openStory(id: number) {
    this.store$.dispatch(
      navigateTo({ payload: { path: [`/managers/story/${id}`] } })
    );
  }

  activeStory(args: { id: number; active: boolean }) {
    this.store$.dispatch(activeStory({ id: args.id, active: args.active }));
  }

  createStory() {
    this.store$.dispatch(
      navigateTo({ payload: { path: ['/managers/create'] } })
    );
  }

  saveNewWeight() {
    this.store$.dispatch(saveNewWeight());
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
