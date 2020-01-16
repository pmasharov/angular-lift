import { TestBed } from '@angular/core/testing';

import { LiftStoreService } from './lift-store.service';

describe('LiftStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiftStoreService = TestBed.get(LiftStoreService);
    expect(service).toBeTruthy();
  });
});
