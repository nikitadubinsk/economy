import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { TetriaryMenuComponent } from './tetriary-menu.component';

describe('TetriaryMenuComponent', () => {
  let component: TetriaryMenuComponent;
  let fixture: ComponentFixture<TetriaryMenuComponent>;
  let store$: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TetriaryMenuComponent],
        imports: [],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(TetriaryMenuComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(store$, 'dispatch');
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
