import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOthersComponent } from './home-others.component';

describe('HomeOthersComponent', () => {
  let component: HomeOthersComponent;
  let fixture: ComponentFixture<HomeOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
