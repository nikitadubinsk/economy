import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {TuiButtonModule, TuiErrorModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiFieldErrorModule, TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/kit';
import {initialState} from 'src/app/store';
import {AuthPageComponent} from './auth-page.component';

describe('AuthPageComponent', () => {
    let component: AuthPageComponent;
    let fixture: ComponentFixture<AuthPageComponent>;
    let store$: MockStore;
    let dispatchSpy: jest.SpyInstance;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AuthPageComponent],
            imports: [
                TuiInputModule,
                TuiInputPasswordModule,
                TuiFieldErrorModule,
                TuiButtonModule,
                TuiLinkModule,
                TuiErrorModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [
                provideMockStore({
                    initialState,
                }),
            ],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;
        store$ = TestBed.inject(MockStore);
        dispatchSpy = jest.spyOn(store$, 'dispatch');
    });

    it('Компонент должен быть создан', () => {
        expect(component).toBeTruthy();
    });
});
