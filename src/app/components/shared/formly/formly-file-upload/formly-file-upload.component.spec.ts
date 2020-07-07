import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFileUploadComponent } from './formly-file-upload.component';

describe('FormlyFileUploadComponent', () => {
  let component: FormlyFileUploadComponent;
  let fixture: ComponentFixture<FormlyFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyFileUploadComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
