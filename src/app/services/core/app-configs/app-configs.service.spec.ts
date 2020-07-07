import { TestBed } from '@angular/core/testing';

import { AppConfigsService } from './app-configs.service';

describe('AppConfigsService', () => {
  let service: AppConfigsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConfigsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
