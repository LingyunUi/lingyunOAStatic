import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSmallBoxComponent } from './home-small-box.component';

describe('HomeSmallBoxComponent', () => {
  let component: HomeSmallBoxComponent;
  let fixture: ComponentFixture<HomeSmallBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSmallBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSmallBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
