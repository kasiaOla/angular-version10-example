import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { By } from '@angular/platform-browser';
import { LocationService } from '../../../shared/shared-services/location/location.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from '../../../shared/shared-services/logger/logger.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [HttpClientTestingModule],
      providers: [ LocationService , LoggerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display text in h2', () => {
    fixture = TestBed.createComponent(ContactComponent);
    const testElementHtmlH2 = fixture.debugElement.query(By.css('h2'));
    const elH2 = testElementHtmlH2.nativeElement;
    expect(elH2.textContent).toContain('Kontakt');
  });

});
