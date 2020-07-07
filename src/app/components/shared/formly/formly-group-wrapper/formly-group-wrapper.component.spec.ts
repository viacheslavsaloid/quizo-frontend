import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyGroupWrapperComponent } from './formly-group-wrapper.component';

describe('FormlyGroupWrapperComponent', () => {
  let component: FormlyGroupWrapperComponent;
  let fixture: ComponentFixture<FormlyGroupWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyGroupWrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyGroupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
