import { TestBed } from '@angular/core/testing';

import { TestLibService } from './test-lib.service';

describe('TestLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLibService = TestBed.get(TestLibService);
    expect(service).toBeTruthy();
  });
});
