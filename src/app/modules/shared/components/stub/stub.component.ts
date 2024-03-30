import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StubComponent {
  @Input() header = 'Ничего не найдено';
  @Input() description = 'Попробуйте изменить условия поиска';
}
