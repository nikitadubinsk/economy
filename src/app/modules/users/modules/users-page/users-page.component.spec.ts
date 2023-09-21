import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../store';
import {EntityCardModule} from '../entity-card/entity-card.module';
import {UsersPageComponent} from './users-page.component';
import {TUI_MODULES} from './users-page.module';

describe('UsersPageComponent', () => {
    let component: UsersPageComponent;
    let fixture: ComponentFixture<UsersPageComponent>;
    let store$: MockStore;
    let dispatchSpy: jest.SpyInstance;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UsersPageComponent],
            imports: [...TUI_MODULES, EntityCardModule, FormsModule, ReactiveFormsModule],
            providers: [
                provideMockStore({
                    initialState,
                }),
            ],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UsersPageComponent);
        component = fixture.componentInstance;
        store$ = TestBed.inject(MockStore);
        dispatchSpy = jest.spyOn(store$, 'dispatch');
    });

    it('Компонент должен быть создан', () => {
        expect(component).toBeTruthy();
    });
});
