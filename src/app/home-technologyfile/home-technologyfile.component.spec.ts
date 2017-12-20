import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTechnologyfileComponent } from './home-technologyfile.component';

describe('HomeTechnologyfileComponent', () => {
  let component: HomeTechnologyfileComponent;
  let fixture: ComponentFixture<HomeTechnologyfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTechnologyfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTechnologyfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
