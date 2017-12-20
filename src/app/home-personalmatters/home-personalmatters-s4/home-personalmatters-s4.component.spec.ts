import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonalmattersS4Component } from './home-personalmatters-s4.component';

describe('HomePersonalmattersS4Component', () => {
  let component: HomePersonalmattersS4Component;
  let fixture: ComponentFixture<HomePersonalmattersS4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePersonalmattersS4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonalmattersS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
