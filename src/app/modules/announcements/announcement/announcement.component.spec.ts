import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnouncementComponent } from './announcement.component';

describe('AnnouncementComponent', () => {
  let component: AnnouncementComponent;
  let fixture: ComponentFixture<AnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Is the css class called outlet-container ', () => {
    fixture = TestBed.createComponent(AnnouncementComponent);
    const component = fixture.componentInstance;
    expect(fixture.debugElement.children[0].attributes.class).toEqual('outlet-container');
  });
});
