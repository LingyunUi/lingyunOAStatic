import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministrationS3Component } from './home-administration-s3.component';

describe('HomeAdministrationS3Component', () => {
  let component: HomeAdministrationS3Component;
  let fixture: ComponentFixture<HomeAdministrationS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministrationS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministrationS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
