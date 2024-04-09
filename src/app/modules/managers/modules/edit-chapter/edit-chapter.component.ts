import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Inject,
  OnDestroy,
} from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { STORY_CATEGORIES } from '../../consts/categories.const';
import { Subject, combineLatest, noop } from 'rxjs';
import { filter, map, startWith, takeUntil, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import {
  chapter,
  createChapter,
  editChapter,
  loader,
  loaderButton,
  resetChapter,
} from '../../store';
import { EChapterType } from '../../consts/chapter-type.const';
import { IManagerChapter } from 'src/app/models';
import { TuiDestroyService, tuiIsPresent } from '@taiga-ui/cdk';
import { imageName, loadImage, resetImageName } from 'src/app/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class EditChapterComponent implements OnInit, OnDestroy {
  chapter$ = this.store$.pipe(select(chapter));
  loader$ = this.store$.pipe(select(loader));
  loaderButton$ = this.store$.pipe(select(loaderButton), filter(tuiIsPresent));
  isEdit$ = this.route.params.pipe(
    map((res) => (res?.chapterId !== 'create' ? true : false))
  );
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
  buttonTitle$ = this.isEdit$.pipe(
    map((isEdit) => (isEdit ? 'Сохранить историю' : 'Создать новую истории'))
  );

  title$ = this.isEdit$.pipe(
    map((isEdit) =>
      isEdit ? 'Редактирование истории' : 'Создание новой истории'
    )
  );
  navigateBack = {
    routerLink: '../',
    caption: 'Вернуться к списку историй',
  };

  categories = STORY_CATEGORIES;
  chapter: Partial<IManagerChapter> = {};
  readonly correctAnswer = [1, 2, 3, 4];

  constructor(
    private readonly fb: UntypedFormBuilder,
    protected readonly route: ActivatedRoute,
    private readonly store$: Store,
    @Inject(TuiDestroyService) protected readonly destroy$: TuiDestroyService
  ) {}

  chapterForm = this.fb.group({
    title: [undefined, [Validators.required]],
    description: [undefined, [Validators.required]],
    img: [undefined],
    type: [undefined, [Validators.required]],
    answer1: [undefined],
    answer2: [undefined],
    answer3: [undefined],
    answer4: [undefined],
    active: [undefined],
    correctAnswer: [undefined],
  });

  get imgControl() {
    return this.chapterForm.controls.img;
  }

  get typeControl() {
    return this.chapterForm.controls.type;
  }

  get isTextType() {
    return this.typeControl.value === EChapterType.text;
  }

  get isQuestionType() {
    return this.typeControl.value === EChapterType.question;
  }

  readonly loadingFiles$ = new Subject<File | null>();
  readonly loadedFiles$ = this.imgControl.valueChanges.pipe(
    map((file: File | null) => {
      if (file) {
        this.store$.dispatch(loadImage({ file }));
        this.loadingFiles$.next(file);
      }
    })
  );

  ngOnInit(): void {
    combineLatest([
      this.chapterForm.valueChanges,
      this.imageName$,
      this.chapter$,
    ])
      .pipe(
        map(
          ([value, img, chapter]) =>
            (this.chapter = this.convertFormIntoData(value, img, chapter))
        )
      )
      .subscribe(noop, noop);

    this.chapter$
      .pipe(takeUntil(this.destroy$), filter(tuiIsPresent))
      .subscribe((chapter) => {
        this.chapterForm.patchValue({
          title: chapter.title || chapter?.question?.text,
          description: chapter.text || chapter?.question?.answer,
          type: chapter.question ? EChapterType.question : EChapterType.text,
          answer1: chapter?.question?.answers[0],
          answer2: chapter?.question?.answers[1],
          answer3: chapter?.question?.answers[2],
          answer4: chapter?.question?.answers[3],
          correctAnswer: chapter?.question?.correctAnswer,
          active: chapter.active,
        });
      });
  }

  removeFile(): void {
    this.chapterForm.controls.img.setValue(null);
  }

  clearRejected(): void {
    this.removeFile();
  }

  convertFormIntoData(
    form: any,
    img: string | undefined,
    chapter?: IManagerChapter | null
  ) {
    return this.isQuestionType
      ? {
          img: img || chapter?.img,
          question: {
            text: form.title,
            answers: [form.answer1, form.answer2, form.answer3, form.answer4],
            correctAnswer: form.correctAnswer,
            answer: form.description,
          },
          active: form.active,
        }
      : {
          img: img || chapter?.img,
          title: form.title,
          text: form.description,
          active: form.active,
        };
  }

  saveChapter(isEdit: boolean | null) {
    if (this.chapter?.img) {
      this.store$.dispatch(
        isEdit
          ? editChapter({
              id: 1,
              chapter: { ...this.chapterForm.value, img: this.chapter.img },
            })
          : createChapter({
              chapter: { ...this.chapterForm.value, img: this.chapter.img },
            })
      );
    }
  }

  ngOnDestroy(): void {
    this.store$.dispatch(resetChapter());
    this.store$.dispatch(resetImageName());
  }
}
