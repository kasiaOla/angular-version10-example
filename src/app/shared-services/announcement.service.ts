import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Announcement } from '../modules/announcements/announcement';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private httpClient: HttpClient) { }
  public addAnnouncement(newAnnouncement: Announcement, idCategory: string, idType: string): any {

    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');

    // tslint:disable-next-line:max-line-length
    return this.httpClient.post(`/category/${idCategory}/type/${idType}`, JSON.stringify(newAnnouncement), { headers });
  }
  // get-announcements
  public getAnnouncement() {


    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(`/get-announcements`).pipe(
      tap(songs => console.log('Songs retrieved!'))
    );
  }
}
