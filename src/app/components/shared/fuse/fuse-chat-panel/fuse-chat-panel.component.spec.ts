import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseChatPanelComponent } from './fuse-chat-panel.component';

describe('FuseChatPanelComponent', () => {
  let component: FuseChatPanelComponent;
  let fixture: ComponentFixture<FuseChatPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuseChatPanelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseChatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
