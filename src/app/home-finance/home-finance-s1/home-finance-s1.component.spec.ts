import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinanceS1Component } from './home-finance-s1.component';

describe('HomeFinanceS1Component', () => {
  let component: HomeFinanceS1Component;
  let fixture: ComponentFixture<HomeFinanceS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFinanceS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFinanceS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
