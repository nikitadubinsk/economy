import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-managers-container',
    templateUrl: './managers-container.component.html',
    styleUrls: ['./managers-container.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagersContainerComponent {
    // name$ = this.store$.pipe(select(name));
    // role$ = this.store$.pipe(select(role));

    items = [
        {name: "Статистика", route: "/operators/statistics"},
        {name: "Пользователи", route: "/operators/users"},
        {name: "Операторы", route: "/operators/operators"},
        {name: "Информация", route: "/operators/chapters"},
        {name: "Рассылки", route: "/operators/mailing"},
        {name: "Организация", route: "/operators/organization"},
        {name: "Сообщения", route: "/operators/message"},
    ]
    
    constructor(private readonly store$: Store) {}

    logout() {
        //this.store$.dispatch(logout())
    }
}
