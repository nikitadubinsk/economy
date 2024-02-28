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
import { IStoryManagerInfo } from 'src/app/models';
import { openStory } from '../../../users/store/users.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryCardComponent implements OnChanges, OnInit, OnDestroy {
  @Input() story!: IStoryManagerInfo;

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
    private readonly fb: UntypedFormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.story?.firstChange) {
      this.activeForm.patchValue({ active: this.story.active });
    }
  }

  ngOnInit(): void {
    this.activeForm.controls.active.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((active) =>
        this.onActiveStory.emit({ id: this.story.id, active })
      );
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

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
