import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseContentComponent } from './fuse-content.component';

describe('FuseContentComponent', () => {
  let component: FuseContentComponent;
  let fixture: ComponentFixture<FuseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuseContentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
