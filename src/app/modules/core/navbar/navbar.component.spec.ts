import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../authentication/auth.service';
import { LoggerService } from '../../../shared/shared-services/logger.service';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [AuthService, LoggerService ],

    })
      .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Unit test the link attribute', async(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    const compiled = fixture.debugElement;
    const routerLink = compiled.query(By.css('a[name=home]')).nativeElement.getAttribute('routerLinkActive');
    expect(routerLink).toEqual('active');
  }));
});
