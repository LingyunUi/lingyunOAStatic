import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinanceS4Component } from './home-finance-s4.component';

describe('HomeFinanceS4Component', () => {
  let component: HomeFinanceS4Component;
  let fixture: ComponentFixture<HomeFinanceS4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFinanceS4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFinanceS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
