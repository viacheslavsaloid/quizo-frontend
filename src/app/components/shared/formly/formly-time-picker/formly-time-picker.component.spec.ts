import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyTimePickerComponent } from './formly-time-picker.component';

describe('FormlyTimePickerComponent', () => {
  let component: FormlyTimePickerComponent;
  let fixture: ComponentFixture<FormlyTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyTimePickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
