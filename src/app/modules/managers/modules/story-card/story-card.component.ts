import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { IStoryInfo } from 'src/app/models';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryCardComponent implements OnInit {
  @Input() story!: IStoryInfo;

  activeForm = this.fb.group({
    active: [false],
  });

  constructor(
    private readonly store$: Store,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
