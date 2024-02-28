import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { STORY_CATEGORIES } from '../../consts/categories.const';
import { TuiFileLike } from '@taiga-ui/kit';
import { EMPTY, Subject, forkJoin, noop, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadChapterImage } from '../../store';
import { EChapterType } from '../../consts/chapter-type.const';
import { IManagerChapter } from 'src/app/models';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditChapterComponent implements OnInit {
  title = 'Редактирование истории';
  navigateBack = {
    routerLink: '../',
    caption: 'Вернуться к списку историй',
  };

  categories = STORY_CATEGORIES;
  chapter: Partial<IManagerChapter> = {};

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly store$: Store
  ) {}

  chapterForm = this.fb.group({
    title: [undefined, [Validators.required]],
    description: [undefined],
    category: [undefined, [Validators.required]],
    img: [undefined, [Validators.required]],
    type: [undefined, [Validators.required]],
    answer1: [undefined],
    answer2: [undefined],
    answer3: [undefined],
    answer4: [undefined],
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

  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  readonly loadedFiles$ = this.imgControl.valueChanges.pipe(
    switchMap((file) => [file ? loadChapterImage({ file }) : EMPTY])
  );

  ngOnInit(): void {
    this.chapterForm.valueChanges
      .pipe(map((value) => (this.chapter = this.convertFormIntoData(value))))
      .subscribe(noop, noop);
  }

  onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile(): void {
    this.chapterForm.controls.img.setValue(null);
  }

  clearRejected(): void {
    this.removeFile();
    this.rejectedFiles$.next(null);
  }

  convertFormIntoData(form: any) {
    return this.isQuestionType
      ? {
          img: 'https://klike.net/uploads/posts/2022-11/1667546896_2-1.jpg',
          question: {
            text: form.title,
            answers: [form.answer1, form.answer2, form.answer3, form.answer4],
            correctAnswer: 2,
            answer: form.description,
          },
        }
      : {
          img: 'https://klike.net/uploads/posts/2022-11/1667546896_2-1.jpg',
          title: form.title,
          text: form.description,
        };
  }
}
