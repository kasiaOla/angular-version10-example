import { Location } from './../../../modules/pages/contact/location';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from '../logger/logger.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { share, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locationSession = new BehaviorSubject<Location[]>(null);
  public locationSession$ = this.locationSession.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private httpClient: HttpClient, private logger: LoggerService) { }

  public getLocations(): Observable<Location[]> {

    return this.httpClient.get<Location[]>(`/api/get-locations`, this.httpOptions).pipe(
      map(data => data),
      tap(announcements => {
        this.locationSession.next(announcements);
        this.logger.info('locations retrieved!' + announcements);
      }),
      share()
    );
  }
}
