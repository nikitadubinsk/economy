import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IStoryInfo, IStoryManagerInfo } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.less'],
})
export class StoryComponent {
  @Input() story!: IStoryInfo | IStoryManagerInfo | Partial<IStoryManagerInfo>;

  @Output() onShowStory = new EventEmitter<number>();

  constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

  showStory(id: number) {
    this.onShowStory.emit(id);
  }

  convertImg() {
    return `url(${environment.BASE_URL}/file/${this.story.img}) no-repeat center top / cover`;
  }
}
