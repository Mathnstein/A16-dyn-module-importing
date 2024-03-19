import { TestBed } from '@angular/core/testing';

import { DynLibService } from './dyn-lib.service';

describe('DynLibService', () => {
  let service: DynLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
