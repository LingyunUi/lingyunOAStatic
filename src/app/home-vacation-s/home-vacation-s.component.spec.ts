import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVacationSComponent } from './home-vacation-s.component';

describe('HomeVacationSComponent', () => {
  let component: HomeVacationSComponent;
  let fixture: ComponentFixture<HomeVacationSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVacationSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVacationSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
