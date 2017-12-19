import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTaskDetailComponent } from './home-task-detail.component';

describe('HomeTaskDetailComponent', () => {
  let component: HomeTaskDetailComponent;
  let fixture: ComponentFixture<HomeTaskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTaskDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
