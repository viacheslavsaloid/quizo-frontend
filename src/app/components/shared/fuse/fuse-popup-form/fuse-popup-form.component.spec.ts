import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusePopupFormComponent } from './fuse-popup-form.component';

describe('FusePopupFormComponent', () => {
  let component: FusePopupFormComponent;
  let fixture: ComponentFixture<FusePopupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FusePopupFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusePopupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
