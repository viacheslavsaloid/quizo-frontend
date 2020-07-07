import { TestBed } from '@angular/core/testing';

import { AppPopupService } from './app-popup.service';

describe('AppPopupService', () => {
  let service: AppPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
