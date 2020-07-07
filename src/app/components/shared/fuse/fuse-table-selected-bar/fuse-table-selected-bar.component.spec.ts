import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseTableSelectedBarComponent } from './fuse-table-selected-bar.component';

describe('FuseTableSelectedBarComponent', () => {
  let component: FuseTableSelectedBarComponent;
  let fixture: ComponentFixture<FuseTableSelectedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuseTableSelectedBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseTableSelectedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
