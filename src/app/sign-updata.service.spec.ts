import { TestBed } from '@angular/core/testing';

import { SignUpdataService } from './sign-updata.service';

describe('SignUpdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignUpdataService = TestBed.get(SignUpdataService);
    expect(service).toBeTruthy();
  });
});
