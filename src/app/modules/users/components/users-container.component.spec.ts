import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import { initialState } from '../store';
import { UsersContainerComponent } from './users-container.component';

describe('UsersContainerComponent', () => {
    let component: UsersContainerComponent;
    let fixture: ComponentFixture<UsersContainerComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [UsersContainerComponent],
                imports: [RouterTestingModule],
                providers: [
                    provideMockStore({
                        initialState,
                    }),
                ],
            }).compileComponents();
        })
    );
    beforeEach(() => {
        fixture = TestBed.createComponent(UsersContainerComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('Компонент должен быть создан', () => {
        expect(component).toBeTruthy();
    });
});
