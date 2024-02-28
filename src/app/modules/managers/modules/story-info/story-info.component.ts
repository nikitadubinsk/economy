import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  HostListener,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { chapters, loader } from '../../store/managers.selector';
import { UntypedFormBuilder } from '@angular/forms';
import { activeChapter, deleteChapter, selectChapter } from '../../store';
import { IManagerChapter } from 'src/app/models';

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

  index = 0;
  carouselCount = 1;

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
    // console.log(window.innerWidth)
    this.carouselCount = 3;
    // this.store$.dispatch(loadChapters({id: 1}));
  }

  convertImg(img: string) {
    return `url(${img}) no-repeat center top / cover`;
  }

  activeStory({ id, active }: { id: number; active: boolean }) {
    this.store$.dispatch(activeChapter({ id, active }));
  }

  editStory(chapter: IManagerChapter) {
    this.store$.dispatch(selectChapter({ chapter }));
  }

  deleteStory(id: number) {
    this.store$.dispatch(deleteChapter({ id }));
  }
}
