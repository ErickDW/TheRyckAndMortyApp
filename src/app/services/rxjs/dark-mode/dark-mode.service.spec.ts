import { TestBed } from '@angular/core/testing';

import { DarkModeService } from './dark-mode.service';

describe('DarkModeService', () => {
  let service: DarkModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update and emit boolean state', () => {
    const newState = true;

    service.darkMode$.subscribe(state => {
      expect(state).toBe(newState);
    });

    service.darkModeSet(newState);
  });
});
