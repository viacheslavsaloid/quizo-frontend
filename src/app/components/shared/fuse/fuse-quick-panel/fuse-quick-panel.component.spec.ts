import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseQuickPanelComponent } from './fuse-quick-panel.component';

describe('FuseQuickPanelComponent', () => {
  let component: FuseQuickPanelComponent;
  let fixture: ComponentFixture<FuseQuickPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuseQuickPanelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseQuickPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
