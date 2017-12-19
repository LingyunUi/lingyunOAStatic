import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCalendarSComponent } from './home-calendar-s.component';

describe('HomeCalendarSComponent', () => {
  let component: HomeCalendarSComponent;
  let fixture: ComponentFixture<HomeCalendarSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCalendarSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCalendarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
