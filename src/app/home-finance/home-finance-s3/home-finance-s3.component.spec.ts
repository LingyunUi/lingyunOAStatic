import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinanceS3Component } from './home-finance-s3.component';

describe('HomeFinanceS3Component', () => {
  let component: HomeFinanceS3Component;
  let fixture: ComponentFixture<HomeFinanceS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFinanceS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFinanceS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
