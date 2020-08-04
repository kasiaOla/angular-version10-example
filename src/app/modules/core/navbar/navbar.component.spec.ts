import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        BrowserModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  }));


  it('home link tests', async(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    const compiled = fixture.debugElement;
    const routerLink = compiled.query(By.css('a[name=home]')).nativeElement.getAttribute('routerLinkActive');
    expect(routerLink).toEqual('active');
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
