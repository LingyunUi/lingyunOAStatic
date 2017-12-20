import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinanceS2Component } from './home-finance-s2.component';

describe('HomeFinanceS2Component', () => {
  let component: HomeFinanceS2Component;
  let fixture: ComponentFixture<HomeFinanceS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFinanceS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFinanceS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
