import { TestBed } from '@angular/core/testing';

import { ServiceBookingService } from './service-booking.service';

describe('ServiceBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingService = TestBed.get(ServiceBookingService);
    expect(service).toBeTruthy();
  });
});
