import { TestBed } from '@angular/core/testing';
import { AnnouncementService } from './announcement.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from '../logger/logger.service';

describe('AnnouncementService', () => {
  let service: AnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule ],
        providers: [LoggerService]
    });
    service = TestBed.inject(AnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
