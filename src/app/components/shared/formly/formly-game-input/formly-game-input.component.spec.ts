import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyGameInputComponent } from './formly-game-input.component';

describe('FormlyGameInputComponent', () => {
  let component: FormlyGameInputComponent;
  let fixture: ComponentFixture<FormlyGameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyGameInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyGameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
