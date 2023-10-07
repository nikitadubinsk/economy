import { Component, ChangeDetectionStrategy, OnInit, Inject, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { clearStory, loadStoryById, story, storyLoader } from '../../store';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { filter } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { IQuestion } from 'src/app/models';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryCardComponent implements OnInit, OnDestroy {
  story$ = this.store$.pipe(select(story), filter(tuiIsPresent));
  storyLoader$ = this.store$.pipe(select(storyLoader));

  chapterIndex = 0;
  isShowCorrectAnswer = false;
  correctAnswerText = "";

  constructor(private readonly store$: Store, @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.store$.dispatch(loadStoryById({ id: 1 }));
  }

  prev() {
    if (this.chapterIndex > 0) {
      this.chapterIndex--;
      this.isShowCorrectAnswer = false;
    }
  }

  next(count: number) {
    if (this.chapterIndex < count - 1) {
      this.chapterIndex++;
      this.isShowCorrectAnswer = false;
    }
  }

  convertImg(img: string) {
    return `url(${img}) no-repeat center top / cover`
  }

  selectAnswer(questions: IQuestion | undefined, idx: number) {
    if (questions) {
      this.isShowCorrectAnswer = true;
      this.correctAnswerText = questions.correctAnswer === idx ? "Верно!" : "Неверно"
    }
  }

  ngOnDestroy(): void {
    this.store$.dispatch(clearStory())
  }
}

