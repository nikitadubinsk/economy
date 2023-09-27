import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-account-page',
    templateUrl: './account-page.component.html',
    styleUrls: ['./account-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageComponent {
    items = [
        {name: "← Главная", route: "/users"},
        {name: "Аккаунт", route: "/users/account"},
        {name: "Траты", route: "/users/account/transactions"},
        {name: "Дети", route: "/users/account/childrens"},
    ]
}
