import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoundComponent } from './admin-round.component';

describe('AdminRoundComponent', () => {
  let component: AdminRoundComponent;
  let fixture: ComponentFixture<AdminRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRoundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
