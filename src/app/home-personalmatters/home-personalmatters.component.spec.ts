import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonalmattersComponent } from './home-personalmatters.component';

describe('HomePersonalmattersComponent', () => {
  let component: HomePersonalmattersComponent;
  let fixture: ComponentFixture<HomePersonalmattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePersonalmattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonalmattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
