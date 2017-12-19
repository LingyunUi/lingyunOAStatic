import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkattendanceComponent } from './home-workattendance.component';

describe('HomeWorkattendanceComponent', () => {
  let component: HomeWorkattendanceComponent;
  let fixture: ComponentFixture<HomeWorkattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
