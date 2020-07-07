import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyHideComponent } from './formly-hide.component';

describe('FormlyHideComponent', () => {
  let component: FormlyHideComponent;
  let fixture: ComponentFixture<FormlyHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyHideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
