import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationComponent } from './user-registration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AuthService } from '../../core/authentication/auth.service';

class MockAuthService extends AuthService {}

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let testElementHtmlButton: DebugElement;
  let elButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display text in h2', () => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    const testElementHtmlH2 = fixture.debugElement.query(By.css('h2'));
    const elH2 = testElementHtmlH2.nativeElement;
    expect(elH2.textContent).toContain('Rejestracja użytkownika');
  });

  it('Unit test displaying the button name', () => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    testElementHtmlButton = fixture.debugElement.query(By.css('.btn-default'));
    elButton = testElementHtmlButton.nativeElement;
    expect(elButton.textContent).toContain('Resetuj');
  });

  it('Unit test displaying the button name', () => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    testElementHtmlButton = fixture.debugElement.query(By.css('.btn-success'));
    elButton = testElementHtmlButton.nativeElement;
    expect(elButton.textContent).toContain('Rejestracja');
  });
});
