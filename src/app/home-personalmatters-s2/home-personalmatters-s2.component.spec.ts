import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonalmattersS2Component } from './home-personalmatters-s2.component';

describe('HomePersonalmattersS2Component', () => {
  let component: HomePersonalmattersS2Component;
  let fixture: ComponentFixture<HomePersonalmattersS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePersonalmattersS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonalmattersS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
