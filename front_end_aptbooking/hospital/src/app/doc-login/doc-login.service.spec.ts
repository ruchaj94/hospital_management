import { TestBed } from '@angular/core/testing';

import { DocLoginService } from './doc-login.service';

describe('DocLoginService', () => {
  let service: DocLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
