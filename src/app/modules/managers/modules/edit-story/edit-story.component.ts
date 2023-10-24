import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Inject,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { ACTIONS } from '../../consts/action.const';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditStoryComponent {
  constructor(
    private readonly fb: FormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<
      { id: number },
      { id: number; action: ACTIONS }
    >
  ) {}

  storyForm = this.fb.group({
    title: [undefined, [Validators.required]],
  });

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
