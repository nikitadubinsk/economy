import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { logout } from 'src/app/store';

@Component({
    selector: 'app-managers-container',
    templateUrl: './managers-container.component.html',
    styleUrls: ['./managers-container.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagersContainerComponent {
    items = [
        {name: "Истории", route: "/operators/stories"},
        // {name: "Пользователи", route: "/operators/users"},
        // {name: "Операторы", route: "/operators/operators"},
        // {name: "Информация", route: "/operators/chapters"},
        // {name: "Рассылки", route: "/operators/mailing"},
        // {name: "Организация", route: "/operators/organization"},
        // {name: "Сообщения", route: "/operators/message"},
    ]
    
    constructor(private readonly store$: Store,  private readonly fb: FormBuilder) {}

    logout() {
        this.store$.dispatch(logout())
    }
}
