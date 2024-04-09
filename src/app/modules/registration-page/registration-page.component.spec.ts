import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  TuiButtonModule,
  TuiCalendarModule,
  TuiDataListModule,
  TuiLinkModule,
} from '@taiga-ui/core';
import {
  TuiCalendarMonthModule,
  TuiDataListWrapperModule,
  TuiFieldErrorModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPasswordModule,
  TuiSelectModule,
  TuiTextAreaModule,
} from '@taiga-ui/kit';
import { initialState } from 'src/app/store';
import { RegistrationPageComponent } from './registration-page.component';

describe('UsersPageComponent', () => {
  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;
  let store$: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RegistrationPageComponent],
        imports: [
          TuiInputModule,
          TuiInputPasswordModule,
          TuiFieldErrorModule,
          TuiButtonModule,
          TuiTextAreaModule,
          TuiInputDateModule,
          TuiCalendarModule,
          TuiCalendarMonthModule,
          TuiLinkModule,
          TuiSelectModule,
          TuiDataListModule,
          TuiDataListWrapperModule,
          TuiInputNumberModule,
          FormsModule,
          ReactiveFormsModule,
        ],
        providers: [
          provideMockStore({
            initialState,
          }),
        ],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPageComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(store$, 'dispatch');
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
