import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonalmattersS1Component } from './home-personalmatters-s1.component';

describe('HomePersonalmattersS1Component', () => {
  let component: HomePersonalmattersS1Component;
  let fixture: ComponentFixture<HomePersonalmattersS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePersonalmattersS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonalmattersS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
