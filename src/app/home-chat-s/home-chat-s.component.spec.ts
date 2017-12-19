import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChatSComponent } from './home-chat-s.component';

describe('HomeChatSComponent', () => {
  let component: HomeChatSComponent;
  let fixture: ComponentFixture<HomeChatSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChatSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChatSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
