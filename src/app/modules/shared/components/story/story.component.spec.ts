import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { fio, initialState, RootState, userRoles } from '@app/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LAYOUT_TUI_MODULES } from '../../layouts.module';
import { NavigationComponent } from './navigation.component';
import { ERolePage } from '@app/consts';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let store$: MockStore<RootState>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavigationComponent],
        imports: [RouterTestingModule, ...LAYOUT_TUI_MODULES],
        providers: [
          provideMockStore<RootState>({
            initialState,
            selectors: [
              {
                selector: userRoles,
                value: new Map()
                  .set(ERolePage.history, ERolePage.history)
                  .set(ERolePage.collections, ERolePage.collections)
                  .set(
                    ERolePage.collectionRestaurant,
                    ERolePage.collectionRestaurant
                  ),
              },
            ],
          }),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    store$.overrideSelector(fio, 'Тест');
    fixture.detectChanges();
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
