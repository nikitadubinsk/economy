import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  HostListener,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { chapters, loader, storyId } from '../../store/managers.selector';
import { UntypedFormBuilder } from '@angular/forms';
import { activeChapter, deleteChapter, selectChapter } from '../../store';
import { navigateTo } from 'src/app/store';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { filter, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-story-info',
  templateUrl: './story-info.component.html',
  styleUrls: ['./story-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryInfoComponent implements OnInit {
  chapters$ = this.store$.pipe(select(chapters));
  loader$ = this.store$.pipe(select(loader));
  storyId$ = this.store$.pipe(select(storyId), filter(tuiIsPresent));

  title = 'История';
  navigateBack = {
    routerLink: '../../',
    caption: 'Вернуться к списку историй',
  };

  index = 0;
  carouselCount = 1;

  isShowStub$ = combineLatest([this.chapters$, this.loader$]).pipe(
    map(([chapters, loader]) => !chapters.length && !loader)
  );

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.carouselCount = Math.floor(event.target.innerWidth / 450) || 1;
  }

  activeForm = this.fb.group({
    active: [undefined],
  });

  constructor(
    private readonly store$: Store,
    private readonly fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.carouselCount = Math.floor(window.innerWidth / 450) || 1;
  }

  convertImg(img: string) {
    return `url(${img}) no-repeat center top / cover`;
  }

  activeStory({ id, active }: { id: number; active: boolean }) {
    this.store$.dispatch(activeChapter({ id, active }));
  }

  editStory(id: number) {
    this.store$.dispatch(selectChapter({ id }));
  }

  deleteStory(id: number) {
    this.store$.dispatch(deleteChapter({ id }));
  }

  createChapter(id: number | null) {
    this.store$.dispatch(
      navigateTo({ payload: { path: [`/managers/story/${id}/create`] } })
    );
  }

  min(num1: number, num2: number): number {
    return Math.min(num1, num2);
  }
}
