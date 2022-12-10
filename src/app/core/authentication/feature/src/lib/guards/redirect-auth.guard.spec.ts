import { TestBed } from '@angular/core/testing';

import { RedirectAuthGuard } from './redirect-auth.guard';

describe('RedirectAuthGuard', () => {
  let guard: RedirectAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
