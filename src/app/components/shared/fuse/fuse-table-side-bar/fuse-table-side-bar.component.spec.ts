import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseTableSidebarComponent } from './fuse-table-side-bar.component';

describe('FuseTableSidebarComponent', () => {
  let component: FuseTableSidebarComponent;
  let fixture: ComponentFixture<FuseTableSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuseTableSidebarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseTableSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
