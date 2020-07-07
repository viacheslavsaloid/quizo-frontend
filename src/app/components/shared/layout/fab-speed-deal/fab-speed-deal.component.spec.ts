import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSpeedDealComponent } from './fab-speed-deal.component';

describe('FabSpeedDealComponent', () => {
  let component: FabSpeedDealComponent;
  let fixture: ComponentFixture<FabSpeedDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FabSpeedDealComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSpeedDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
