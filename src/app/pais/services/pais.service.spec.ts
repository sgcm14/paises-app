import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PaisService } from 'src/app/pais/services/pais.service';

describe('PaisService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(PaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
