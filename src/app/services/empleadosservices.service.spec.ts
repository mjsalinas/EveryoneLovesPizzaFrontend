import { TestBed } from '@angular/core/testing';

import { EmpleadosservicesService } from './empleadosservices.service';

describe('EmpleadosservicesService', () => {
  let service: EmpleadosservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
