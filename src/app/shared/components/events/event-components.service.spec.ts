import { TestBed } from '@angular/core/testing';

import { EventComponentsService } from './event-components.service';

describe('EventComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventComponentsService = TestBed.get(EventComponentsService);
    expect(service).toBeTruthy();
  });
});
