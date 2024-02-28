import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { STORY_CATEGORIES } from '../../consts/categories.const';
import { TuiFileLike } from '@taiga-ui/kit';
import { EMPTY, Subject, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadChapterImage } from '../../store';
import { EChapterType } from '../../consts/chapter-type.const';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditChapterComponent {
  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly store$: Store
  ) {}

  chapterForm = this.fb.group({
    title: [undefined, [Validators.required]],
    description: [undefined, [Validators.required]],
    category: [undefined, [Validators.required]],
    img: [undefined, [Validators.required]],
    type: [undefined, [Validators.required]],
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

  title = 'Редактирование истории';
  navigateBack = {
    routerLink: '../',
    caption: 'Вернуться к списку историй',
  };

  categories = STORY_CATEGORIES;
}
