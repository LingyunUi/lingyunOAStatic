import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministrationS2Component } from './home-administration-s2.component';

describe('HomeAdministrationS2Component', () => {
  let component: HomeAdministrationS2Component;
  let fixture: ComponentFixture<HomeAdministrationS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministrationS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministrationS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
