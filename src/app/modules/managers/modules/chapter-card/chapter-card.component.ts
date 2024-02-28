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
import { UntypedFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IManagerChapter } from 'src/app/models';
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
  @Output() onEditStory = new EventEmitter<IManagerChapter>();
  @Output() onOpenStory = new EventEmitter<number>();
  @Output() onActiveStory = new EventEmitter<{ id: number; active: boolean }>();

  activeForm = this.fb.group({
    active: [undefined],
  });

  private destroy$ = new Subject<void>();

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chapter?.firstChange) {
      this.activeForm.patchValue({ active: this.chapter.active });
    }
  }

  ngOnInit(): void {
    this.activeForm.controls.active.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((active) =>
        this.onActiveStory.emit({ id: this.chapter.id, active })
      );
  }

  deleteStory() {
    this.onDeleteStory.emit(this.chapter.id);
  }

  editStory() {
    this.onEditStory.emit(this.chapter);
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
