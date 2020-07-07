import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMediaComponent } from './popup-media.component';

describe('PopupMediaComponent', () => {
  let component: PopupMediaComponent;
  let fixture: ComponentFixture<PopupMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMediaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
