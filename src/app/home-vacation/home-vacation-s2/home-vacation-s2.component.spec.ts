import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVacationS2Component } from './home-vacation-s2.component';

describe('HomeVacationS2Component', () => {
  let component: HomeVacationS2Component;
  let fixture: ComponentFixture<HomeVacationS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVacationS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVacationS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
