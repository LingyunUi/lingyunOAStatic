import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonslistComponent } from './home-personslist.component';

describe('HomePersonslistComponent', () => {
  let component: HomePersonslistComponent;
  let fixture: ComponentFixture<HomePersonslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePersonslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
