import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStoryInfo, IStoryManagerInfo } from 'src/app/models';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.less'],
})
export class StoryComponent {
  @Input() story!: IStoryInfo | IStoryManagerInfo;

  @Output() onShowStory = new EventEmitter<number>();

  showStory(id: number) {
    this.onShowStory.emit(id);
  }

  convertImg(img: string) {
    return `url(${img}) no-repeat center top / cover`;
  }
}
