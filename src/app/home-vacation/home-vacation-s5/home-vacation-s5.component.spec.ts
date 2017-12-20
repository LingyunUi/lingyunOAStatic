import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVacationS5Component } from './home-vacation-s5.component';

describe('HomeVacationS5Component', () => {
  let component: HomeVacationS5Component;
  let fixture: ComponentFixture<HomeVacationS5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVacationS5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVacationS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
