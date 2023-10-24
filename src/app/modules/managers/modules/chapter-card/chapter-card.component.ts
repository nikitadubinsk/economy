import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IManagerChapter, IStoryManagerInfo } from 'src/app/models';
import { openStory } from '../../../users/store/users.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterCardComponent implements OnChanges, OnInit, OnDestroy {
  @Input() chapter!: IManagerChapter;

  @Output() onDeleteStory = new EventEmitter<number>();
  @Output() onEditStory = new EventEmitter<IStoryManagerInfo>();
  @Output() onOpenStory = new EventEmitter<number>();
  @Output() onActiveStory = new EventEmitter<{ id: number; active: boolean }>();

  activeForm = this.fb.group({
    active: [undefined],
  });

  private destroy$ = new Subject<void>();

  constructor(
    private readonly store$: Store,
    private readonly fb: FormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chapter?.firstChange) {
      this.activeForm.patchValue({ active: this.chapter.active });
    }
  }

  ngOnInit(): void {
    // this.activeForm.controls.active.valueChanges
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((active) =>
    //     this.onActiveStory.emit({ id: this.story.id, active })
    //   );
  }

  deleteStory(id: number) {
    this.onDeleteStory.emit(id);
  }

  editStory(story: IStoryManagerInfo) {
    this.onEditStory.emit(story);
  }

  openStory(id: number) {
    this.onOpenStory.emit(id);
  }

  convertImg(img: string) {
    return `url(${img}) no-repeat center top / cover`;
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
