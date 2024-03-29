import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Inject,
} from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { ACTIONS } from '../../consts/action.const';
import { STORY_CATEGORIES } from '../../consts/categories.const';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditStoryComponent {
  constructor(
    private readonly fb: UntypedFormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<
      { id: number },
      { id: number; action: ACTIONS }
    >
  ) {}

  storyForm = this.fb.group({
    title: [undefined, [Validators.required]],
    category: [undefined, [Validators.required]],
    img: [undefined, [Validators.required]],
  });

  categories = STORY_CATEGORIES;

  get title() {
    if (this.context.data) {
      return this.context.data.action === ACTIONS.ADD
        ? 'Создать историю'
        : 'Изменить историю';
    } else {
      return 'История';
    }
  }

  editStory() {
    console.log('AAAAA');
  }
}
