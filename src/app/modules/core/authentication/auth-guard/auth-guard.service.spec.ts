import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import { LoggerService } from '../../../../shared/shared-services/logger/logger.service';

class MockAuthService extends AuthService {}

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [LoggerService, {
        provide: AuthService,
        useClass: MockAuthService
      }],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
