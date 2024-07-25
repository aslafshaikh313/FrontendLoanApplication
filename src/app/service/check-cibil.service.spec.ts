import { TestBed } from '@angular/core/testing';

import { CheckCibilService } from './check-cibil.service';

describe('CheckCibilService', () => {
  let service: CheckCibilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckCibilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
