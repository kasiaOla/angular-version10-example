import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


class MockAuthService extends AuthService {}

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let testElementHtmlButton: DebugElement;
  let elButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [FormBuilder, {
        provide: AuthService,
        useClass: MockAuthService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display text in h4', () => {
    fixture = TestBed.createComponent(UserLoginComponent);
    const testElementHtmlH2 = fixture.debugElement.query(By.css('h4'));
    const elH2 = testElementHtmlH2.nativeElement;
    expect(elH2.textContent).toContain('Logowanie użytkownika');
  });

  it('display text in button', () => {
    fixture = TestBed.createComponent(UserLoginComponent);
    testElementHtmlButton = fixture.debugElement.query(By.css('button'));
    elButton = testElementHtmlButton.nativeElement;
    expect(elButton.textContent).toContain('Login');
  });
});
