import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkattendanceMineComponent } from './home-workattendance-mine.component';

describe('HomeWorkattendanceMineComponent', () => {
  let component: HomeWorkattendanceMineComponent;
  let fixture: ComponentFixture<HomeWorkattendanceMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkattendanceMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkattendanceMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
