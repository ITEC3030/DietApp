import { TestBed } from '@angular/core/testing';

import { ContentChangerService } from './content-changer.service';

describe('ContentChangerService', () => {
  let service: ContentChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
