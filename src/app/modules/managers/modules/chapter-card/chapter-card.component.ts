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
  Inject,
} from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { IManagerChapter } from 'src/app/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterCardComponent implements OnChanges, OnInit, OnDestroy {
  @Input() chapter!: Partial<IManagerChapter>;
  @Input() isEditMode: boolean = false;

  @Output() onDeleteStory = new EventEmitter<number>();
  @Output() onEditStory = new EventEmitter<number>();
  @Output() onOpenStory = new EventEmitter<number>();
  @Output() onActiveStory = new EventEmitter<{ id: number; active: boolean }>();

  activeForm = this.fb.group({
    active: [undefined],
  });

  private destroy$ = new Subject<void>();

  constructor(
    private readonly fb: UntypedFormBuilder,
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer
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
        this.onActiveStory.emit({ id: this.chapter.id || 0, active })
      );
  }

  deleteStory() {
    this.onDeleteStory.emit(this.chapter.id);
  }

  editStory() {
    if (this.chapter.id) {
      this.onEditStory.emit(this.chapter.id);
    }
  }

  openStory(id: number) {
    this.onOpenStory.emit(id);
  }

  convertImg(img: string) {
    return `url(${environment.BASE_URL}/file/${img}) no-repeat center top / cover`;
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
