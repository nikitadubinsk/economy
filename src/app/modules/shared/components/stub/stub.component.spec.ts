import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StubComponent } from './stub.component';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StubComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });
});
