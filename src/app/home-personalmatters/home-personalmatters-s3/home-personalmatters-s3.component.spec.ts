import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonalmattersS3Component } from './home-personalmatters-s3.component';

describe('HomePersonalmattersS3Component', () => {
  let component: HomePersonalmattersS3Component;
  let fixture: ComponentFixture<HomePersonalmattersS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePersonalmattersS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonalmattersS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
