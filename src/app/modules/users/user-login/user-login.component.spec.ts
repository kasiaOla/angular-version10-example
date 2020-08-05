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

  it('Unit test displaying the h4 name', () => {
    fixture = TestBed.createComponent(UserLoginComponent);
    const testElementHtmlH2 = fixture.debugElement.query(By.css('h4'));
    const elH2 = testElementHtmlH2.nativeElement;
    expect(elH2.textContent).toContain('Logowanie użytkownika');
  });

  it('Unit test displaying the button name', () => {
    fixture = TestBed.createComponent(UserLoginComponent);
    testElementHtmlButton = fixture.debugElement.query(By.css('button'));
    elButton = testElementHtmlButton.nativeElement;
    expect(elButton.textContent).toContain('Login');
  });

  it('Unit test of the input type', async(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    const compiled = fixture.debugElement;
    const routerLink = compiled.query(By.css('input[name=password]')).nativeElement.getAttribute('type');
    expect(routerLink).toEqual('password');
  }));

});
