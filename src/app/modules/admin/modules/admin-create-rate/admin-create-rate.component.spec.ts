import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore } from '@ngrx/store/testing';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import {
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiTextAreaModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { TetriaryMenuModule } from 'src/app/modules/shared/tetriary-menu/tetriary-menu.module';
import { AdminCreateRateComponent } from './admin-create-rate.component';

describe('AdminCreateRateComponent', () => {
  let component: AdminCreateRateComponent;
  let fixture: ComponentFixture<AdminCreateRateComponent>;
  let store$: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdminCreateRateComponent],
        imports: [
          TuiButtonModule,
          TuiToggleModule,
          TuiInputModule,
          TuiTextAreaModule,
          TuiFieldErrorModule,
          TuiInputNumberModule,
          TuiCurrencyPipeModule,
          TuiLoaderModule,
          FormsModule,
          ReactiveFormsModule,
          TetriaryMenuModule,
        ],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateRateComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(store$, 'dispatch');
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
