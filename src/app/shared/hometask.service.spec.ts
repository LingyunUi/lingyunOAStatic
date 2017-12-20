import { TestBed, inject } from '@angular/core/testing';

import { HometaskService } from './hometask.service';

describe('HometaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HometaskService]
    });
  });

  it('should be created', inject([HometaskService], (service: HometaskService) => {
    expect(service).toBeTruthy();
  }));
});
