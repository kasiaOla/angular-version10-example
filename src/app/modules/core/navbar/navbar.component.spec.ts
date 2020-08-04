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
        RouterTestingModule, HttpClientTestingModule

      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // it('home link tests', async(() => {
  //   fixture = TestBed.createComponent(NavbarComponent);
  //   const compiled = fixture.debugElement;
  //   const routerLink = compiled.query(By.css('a[name=home]')).nativeElement.getAttribute('routerLink');
  //   expect(routerLink).toEqual('/home');
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
