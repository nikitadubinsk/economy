import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { TuiIslandModule, TuiToggleModule } from '@taiga-ui/kit';
import { TetriaryMenuModule } from 'src/app/modules/shared/tetriary-menu/tetriary-menu.module';
import { AdminRateCardModule } from '../admin-rate-card/admin-rate-card.module';
import { AdminRatesComponent } from './admin-rates.component';

describe('AdminRatesComponent', () => {
  let component: AdminRatesComponent;
  let fixture: ComponentFixture<AdminRatesComponent>;
  let store$: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdminRatesComponent],
        imports: [
          TuiIslandModule,
          TuiButtonModule,
          TuiToggleModule,
          TuiLoaderModule,
          TetriaryMenuModule,
          AdminRateCardModule,
        ],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRatesComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(store$, 'dispatch');
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
