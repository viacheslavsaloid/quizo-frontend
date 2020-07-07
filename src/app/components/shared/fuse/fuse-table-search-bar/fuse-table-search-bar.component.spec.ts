import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseTableSearchBarComponent } from './fuse-table-search-bar.component';

describe('FuseTableSearchBarComponent', () => {
  let component: FuseTableSearchBarComponent;
  let fixture: ComponentFixture<FuseTableSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuseTableSearchBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseTableSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
