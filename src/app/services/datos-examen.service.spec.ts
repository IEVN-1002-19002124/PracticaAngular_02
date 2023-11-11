import { TestBed } from '@angular/core/testing';

import { DatosExamenService } from './datos-examen.service';

describe('DatosExamenService', () => {
  let service: DatosExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
