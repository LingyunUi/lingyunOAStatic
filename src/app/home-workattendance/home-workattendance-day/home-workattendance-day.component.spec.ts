import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkattendanceDayComponent } from './home-workattendance-day.component';

describe('HomeWorkattendanceDayComponent', () => {
  let component: HomeWorkattendanceDayComponent;
  let fixture: ComponentFixture<HomeWorkattendanceDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkattendanceDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkattendanceDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
