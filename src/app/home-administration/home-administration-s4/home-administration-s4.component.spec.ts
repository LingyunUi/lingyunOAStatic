import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministrationS4Component } from './home-administration-s4.component';

describe('HomeAdministrationS4Component', () => {
  let component: HomeAdministrationS4Component;
  let fixture: ComponentFixture<HomeAdministrationS4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministrationS4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministrationS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
