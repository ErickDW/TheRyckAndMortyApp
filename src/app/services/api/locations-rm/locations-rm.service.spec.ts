import { TestBed } from '@angular/core/testing';

import { LocationsRmService } from './locations-rm.service';

describe('LocationsRmService', () => {
  let service: LocationsRmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsRmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
