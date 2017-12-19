import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTaskSComponent } from './home-task-s.component';

describe('HomeTaskSComponent', () => {
  let component: HomeTaskSComponent;
  let fixture: ComponentFixture<HomeTaskSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTaskSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTaskSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
