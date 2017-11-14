import { TestBed, inject } from '@angular/core/testing';

import { PromocionesserviceService } from './promocionesservice.service';

describe('PromocionesserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromocionesserviceService]
    });
  });

  it('should be created', inject([PromocionesserviceService], (service: PromocionesserviceService) => {
    expect(service).toBeTruthy();
  }));
});
