import { TestBed } from '@angular/core/testing';

import { UserWorkService } from './user-work.service';

describe('UserWorkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserWorkService = TestBed.get(UserWorkService);
    expect(service).toBeTruthy();
  });
});
