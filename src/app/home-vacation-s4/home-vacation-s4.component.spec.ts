import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVacationS4Component } from './home-vacation-s4.component';

describe('HomeVacationS4Component', () => {
  let component: HomeVacationS4Component;
  let fixture: ComponentFixture<HomeVacationS4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVacationS4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVacationS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
