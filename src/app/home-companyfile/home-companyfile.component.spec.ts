import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompanyfileComponent } from './home-companyfile.component';

describe('HomeCompanyfileComponent', () => {
  let component: HomeCompanyfileComponent;
  let fixture: ComponentFixture<HomeCompanyfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCompanyfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompanyfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
