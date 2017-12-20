import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOthersS2Component } from './home-others-s2.component';

describe('HomeOthersS2Component', () => {
  let component: HomeOthersS2Component;
  let fixture: ComponentFixture<HomeOthersS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOthersS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOthersS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
