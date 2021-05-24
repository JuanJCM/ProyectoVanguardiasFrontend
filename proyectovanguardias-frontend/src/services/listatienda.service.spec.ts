import { TestBed } from '@angular/core/testing';

import { ListatiendaService } from './listatienda.service';

describe('ListatiendaService', () => {
  let service: ListatiendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListatiendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
