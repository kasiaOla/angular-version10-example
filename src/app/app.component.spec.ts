import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './modules/core/authentication/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from './shared/shared-services/logger/logger.service';
import { RouterTestingModule } from '@angular/router/testing';


class MockAuthService extends AuthService {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [LoggerService ,{
        provide: AuthService,
        useClass: MockAuthService
      }],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
