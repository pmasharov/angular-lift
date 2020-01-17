import { TestBed } from '@angular/core/testing';

import { LiftWayService } from './lift-way.service';

describe('LiftWayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiftWayService = TestBed.get(LiftWayService);
    expect(service).toBeTruthy();
  });
});
