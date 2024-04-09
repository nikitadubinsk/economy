import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore } from '@ngrx/store/testing';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIslandModule, TuiToggleModule } from '@taiga-ui/kit';
import { AdminRateCardComponent } from './admin-rate-card.component';

describe('AdminRateCardComponent', () => {
  let component: AdminRateCardComponent;
  let fixture: ComponentFixture<AdminRateCardComponent>;
  let store$: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdminRateCardComponent],
        imports: [
          TuiIslandModule,
          TuiButtonModule,
          TuiToggleModule,
          FormsModule,
          ReactiveFormsModule,
        ],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRateCardComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(store$, 'dispatch');
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
