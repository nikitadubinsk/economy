import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import {
  TuiArcChartModule,
  TuiAxesModule,
  TuiBarChartModule,
  TuiLegendItemModule,
  TuiRingChartModule,
} from '@taiga-ui/addon-charts';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TetriaryMenuModule } from 'src/app/modules/shared/tetriary-menu/tetriary-menu.module';
import { AdminStatisticsComponent } from './admin-statistics.component';

describe('AdminStatisticsComponent', () => {
  let component: AdminStatisticsComponent;
  let fixture: ComponentFixture<AdminStatisticsComponent>;
  let store$: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdminStatisticsComponent],
        imports: [
          TetriaryMenuModule,
          TuiArcChartModule,
          TuiRingChartModule,
          TuiMoneyModule,
          TuiLegendItemModule,
          TuiLetModule,
          TuiLoaderModule,
          TuiBarChartModule,
          TuiAxesModule,
        ],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticsComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(store$, 'dispatch');
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
