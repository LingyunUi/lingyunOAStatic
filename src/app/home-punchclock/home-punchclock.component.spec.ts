import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePunchclockComponent } from './home-punchclock.component';

describe('HomePunchclockComponent', () => {
  let component: HomePunchclockComponent;
  let fixture: ComponentFixture<HomePunchclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePunchclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePunchclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
