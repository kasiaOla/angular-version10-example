import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Announcement } from '../../modules/announcements/announcement';
import { tap } from 'rxjs/operators';

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

  public getAnnouncement(): Observable<Announcement[]>  {

    return this.httpClient.get<Announcement[]>(`/api/get-announcements`).pipe(
      tap(announcements => console.log('Announcements retrieved!'))
    );
  }
}
