import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministrationS1Component } from './home-administration-s1.component';

describe('HomeAdministrationS1Component', () => {
  let component: HomeAdministrationS1Component;
  let fixture: ComponentFixture<HomeAdministrationS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministrationS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministrationS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
