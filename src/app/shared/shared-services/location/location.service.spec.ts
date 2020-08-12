import { TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from '../logger/logger.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        LoggerService
      ]
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
