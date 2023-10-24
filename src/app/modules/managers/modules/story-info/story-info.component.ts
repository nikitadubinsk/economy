import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { chapters, loader } from '../../store/managers.selector';
import { FormBuilder } from '@angular/forms';
import { loadChapters } from '../../store';

@Component({
  selector: 'app-story-info',
  templateUrl: './story-info.component.html',
  styleUrls: ['./story-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryInfoComponent implements OnInit {
  chapters$ = this.store$.pipe(select(chapters));
  loader$ = this.store$.pipe(select(loader));

  title = 'История';
  navigateBack = {
    routerLink: '../../',
    caption: 'Вернуться к списку историй',
  };

  activeForm = this.fb.group({
    active: [undefined],
  });

  constructor(
    private readonly store$: Store,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.store$.dispatch(loadChapters({id: 1}));
  }

  convertImg(img: string) {
    return `url(${img}) no-repeat center top / cover`;
  }
}
