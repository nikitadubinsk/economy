import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {TuiLoaderModule} from '@taiga-ui/core';
import {TuiAvatarModule} from '@taiga-ui/kit';
import {initialState} from '../../../store';
import {EntityCardModule} from '../../entity-card/entity-card.module';
import {UserAwardsComponent} from './user-awards.component';

describe('UserAwardsComponent', () => {
    let component: UserAwardsComponent;
    let fixture: ComponentFixture<UserAwardsComponent>;
    let store$: MockStore;
    let dispatchSpy: jest.SpyInstance;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UserAwardsComponent],
            imports: [TuiAvatarModule, TuiLoaderModule, EntityCardModule],
            providers: [
                provideMockStore({
                    initialState,
                }),
            ],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserAwardsComponent);
        component = fixture.componentInstance;
        store$ = TestBed.inject(MockStore);
        dispatchSpy = jest.spyOn(store$, 'dispatch');
    });

    it('Компонент должен быть создан', () => {
        expect(component).toBeTruthy();
    });
});
