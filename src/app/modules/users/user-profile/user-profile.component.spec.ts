import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { AuthService } from '../../core/authentication/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from '../../../shared/shared-services/logger.service';

class MockAuthService extends AuthService { }

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserProfileComponent],
      providers: [
        LoggerService,
        {
          provide: AuthService,
          useClass: MockAuthService
        }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
