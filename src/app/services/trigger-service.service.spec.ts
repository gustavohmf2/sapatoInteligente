import { TestBed, inject } from '@angular/core/testing';

import { TriggerServiceService } from './trigger-service.service';

describe('TriggerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriggerServiceService]
    });
  });

  it('should be created', inject([TriggerServiceService], (service: TriggerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
