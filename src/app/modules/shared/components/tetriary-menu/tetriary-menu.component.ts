import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

export interface IMenu {
    name: string;
    route: string;
}
export interface IUseRInfo {
    name: string;
    position: string;
}
export interface INavigateBack {
    caption: string;
    queryParams?: object;
    routerLink: string | (string | number)[];
}

@Component({
    selector: 'app-tetriary-menu',
    templateUrl: './tetriary-menu.component.html',
    styleUrls: ['./tetriary-menu.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TetriaryMenuComponent {
    @Input() items: IMenu[] = []
    @Input() title: string | null = "Административная панель"
    @Input() navigateBack: INavigateBack | null = null;
}
