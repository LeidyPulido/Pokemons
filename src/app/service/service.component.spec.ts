import { TestBed, inject } from '@angular/core/testing';

import { ServiceComponent } from './service.component';

describe('ServiceComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceComponent]
    });
  });

  it('should be created', inject([ServiceComponent], (service: ServiceComponent) => {
    expect(service).toBeTruthy();
  }));
});