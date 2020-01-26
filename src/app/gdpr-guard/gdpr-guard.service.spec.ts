import { TestBed } from '@angular/core/testing';

import { GpdrGuardService } from './gdpr-guard.service';

describe('GpdrGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpdrGuardService = TestBed.get(GpdrGuardService);
    expect(service).toBeTruthy();
  });
});
