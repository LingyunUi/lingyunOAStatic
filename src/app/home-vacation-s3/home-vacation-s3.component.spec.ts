import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVacationS3Component } from './home-vacation-s3.component';

describe('HomeVacationS3Component', () => {
  let component: HomeVacationS3Component;
  let fixture: ComponentFixture<HomeVacationS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVacationS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVacationS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
