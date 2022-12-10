import { TestBed, waitForAsync } from '@angular/core/testing';
import { AuthenticationModule } from './authentication.module';

describe('StudioosAuthenticationModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AuthenticationModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthenticationModule).toBeDefined();
  });
});
