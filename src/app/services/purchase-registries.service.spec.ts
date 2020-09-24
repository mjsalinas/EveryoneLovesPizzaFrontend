import { TestBed } from '@angular/core/testing';

import { PurchaseRegistriesService } from './purchase-registries.service';

describe('PurchaseRegistriesService', () => {
  let service: PurchaseRegistriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseRegistriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
