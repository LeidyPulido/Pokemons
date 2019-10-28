import { TestBed, inject } from '@angular/core/testing';

import { SortService } from './sortService.component';

describe('SortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortService]
    });
  });

  it('should be created', inject([SortService], (service: SortService) => {
    expect(service).toBeTruthy();
  }));
});