import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TuiButtonModule, TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiFieldErrorModule, TuiInputModule } from '@taiga-ui/kit';
import { initialState } from '../users/store';
import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let store$: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ResetPasswordComponent],
        imports: [
          TuiInputModule,
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
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(store$, 'dispatch');
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
