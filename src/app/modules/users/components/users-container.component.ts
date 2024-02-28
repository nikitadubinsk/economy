import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersContainerComponent {}
