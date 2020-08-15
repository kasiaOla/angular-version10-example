import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAnnouncementsComponent } from './list-announcements.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from '../../../shared/shared-services/logger/logger.service';

describe('ListAnnouncementsComponent', () => {
  let component: ListAnnouncementsComponent;
  let fixture: ComponentFixture<ListAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnnouncementsComponent ],
      imports: [HttpClientTestingModule],
      providers: [LoggerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
