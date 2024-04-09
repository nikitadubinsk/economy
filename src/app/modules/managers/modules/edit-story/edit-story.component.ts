import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Inject,
  OnDestroy,
} from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { STORY_CATEGORIES } from '../../consts/categories.const';
import { TuiFileLike } from '@taiga-ui/kit';
import { EMPTY, Subject, combineLatest, forkJoin, noop } from 'rxjs';
import { filter, map, startWith, takeUntil, tap } from 'rxjs/operators';
import {
  createStory,
  editStory,
  loader,
  loaderButton,
  resetStory,
  story,
} from '../../store';
import { ISimpleItem, IStoryManagerInfo } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  TuiContextWithImplicit,
  TuiDestroyService,
  TuiStringHandler,
  tuiIsPresent,
  tuiPure,
} from '@taiga-ui/cdk';
import { imageName, loadImage, resetImageName } from 'src/app/store';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class EditStoryComponent implements OnInit, OnDestroy {
  story$ = this.store$.pipe(select(story));
  loader$ = this.store$.pipe(select(loader));
  loaderButton$ = this.store$.pipe(select(loaderButton), filter(tuiIsPresent));
  imageName$ = this.store$.pipe(
    select(imageName),
    filter(tuiIsPresent),
    startWith(undefined),
    tap((imageName) => {
      if (imageName) {
        this.loadingFiles$.next(null);
      }
    })
  );

  isEdit$ = this.route.params.pipe(map((res) => (res?.id ? true : false)));
  title$ = this.isEdit$.pipe(
    map((isEdit) =>
      isEdit ? 'Редактирование истории' : 'Создание новой истории'
    )
  );
  navigateBack$ = this.isEdit$.pipe(
    map((isEdit) => ({
      routerLink: isEdit ? '../../' : '../',
      caption: 'Вернуться к списку историй',
    }))
  );
  buttonTitle$ = this.isEdit$.pipe(
    map((isEdit) => (isEdit ? 'Сохранить историю' : 'Создать новую истории'))
  );

  storyForm = this.fb.group({
    title: [undefined, [Validators.required]],
    category: [undefined, [Validators.required]],
    img: [undefined],
    active: [false],
  });

  categories = STORY_CATEGORIES;
  story: Partial<IStoryManagerInfo> = {};

  readonly loadingFiles$ = new Subject<File | null>();
  readonly loadedFiles$ = this.imgControl.valueChanges.pipe(
    map((file: File | null) => {
      if (file) {
        this.store$.dispatch(loadImage({ file }));
        this.loadingFiles$.next(file);
      }
    })
  );

  get imgControl() {
    return this.storyForm.controls.img;
  }

  constructor(
    private readonly fb: UntypedFormBuilder,
    protected readonly route: ActivatedRoute,
    private readonly store$: Store,
    @Inject(TuiDestroyService) protected readonly destroy$: TuiDestroyService
  ) {}

  ngOnInit(): void {
    combineLatest([this.storyForm.valueChanges, this.imageName$, this.story$])
      .pipe(
        map(
          ([value, imageName, story]) =>
            (this.story = {
              id: story?.id,
              img: imageName || story?.img,
              title: value.title,
            })
        )
      )
      .subscribe(noop, noop);

    this.story$
      .pipe(takeUntil(this.destroy$), filter(tuiIsPresent))
      .subscribe((story) => {
        this.storyForm.patchValue({
          title: story.title,
          category: story.category.id,
          active: story.active,
        });
      });
  }

  removeFile(): void {
    this.storyForm.controls.img.setValue(null);
  }

  clearRejected(): void {
    this.removeFile();
  }

  saveStory(isEdit: boolean | null) {
    if (this.story.img) {
      this.store$.dispatch(
        isEdit && this.story.id
          ? editStory({
              id: this.story.id,
              title: this.storyForm.value.title,
              category: this.storyForm.value.category,
              active: this.storyForm.value.active,
              img: this.story.img,
            })
          : createStory({
              title: this.storyForm.value.title,
              category: this.storyForm.value.category,
              active: this.storyForm.value.active,
              img: this.story.img,
            })
      );
    }
  }

  @tuiPure
  stringifyCategory(
    items: readonly ISimpleItem[]
  ): TuiStringHandler<TuiContextWithImplicit<number>> {
    const map = new Map(
      items.map(({ id, name }) => [id, name] as [number, string])
    );

    return ({ $implicit }: TuiContextWithImplicit<number>) =>
      map.get($implicit) || '';
  }

  ngOnDestroy(): void {
    this.store$.dispatch(resetStory());
    this.store$.dispatch(resetImageName());
  }
}
