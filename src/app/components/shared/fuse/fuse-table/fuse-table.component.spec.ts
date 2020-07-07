import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseTableComponent } from './fuse-table.component';

describe('FuseTableComponent', () => {
  let component: FuseTableComponent;
  let fixture: ComponentFixture<FuseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuseTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
