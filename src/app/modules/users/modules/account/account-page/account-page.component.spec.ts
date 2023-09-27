import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {TuiHostedDropdownModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiIslandModule, TuiTabsModule} from '@taiga-ui/kit';
import {initialState} from '../../../store';
import {AccountPageComponent} from './account-page.component';

describe('AccountPageComponent', () => {
    let component: AccountPageComponent;
    let fixture: ComponentFixture<AccountPageComponent>;
    let store$: MockStore;
    let dispatchSpy: jest.SpyInstance;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AccountPageComponent],
            imports: [
                TuiTabsModule,
                TuiLinkModule,
                TuiHostedDropdownModule,
                TuiAvatarModule,
                TuiIslandModule,
                TuiSvgModule,
                RouterTestingModule
            ],
            providers: [
                provideMockStore({
                    initialState,
                }),
            ],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AccountPageComponent);
        component = fixture.componentInstance;
        store$ = TestBed.inject(MockStore);
        dispatchSpy = jest.spyOn(store$, 'dispatch');
    });

    it('Компонент должен быть создан', () => {
        expect(component).toBeTruthy();
    });
});
