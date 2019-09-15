import { TestBed } from '@angular/core/testing';

import { ConfApiService } from './conf-api.service';

describe('ConfApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfApiService = TestBed.get(ConfApiService);
    expect(service).toBeTruthy();
  });
});
