import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkattendanceMonthComponent } from './home-workattendance-month.component';

describe('HomeWorkattendanceMonthComponent', () => {
  let component: HomeWorkattendanceMonthComponent;
  let fixture: ComponentFixture<HomeWorkattendanceMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkattendanceMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkattendanceMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
