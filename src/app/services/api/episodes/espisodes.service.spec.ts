import { TestBed } from '@angular/core/testing';

import { EspisodesService } from './espisodes.service';

describe('EspisodesService', () => {
  let service: EspisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
