import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Announcement } from '../modules/announcement/announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private httpClient: HttpClient) { }
  public addAnnouncement(newAnnouncement: Announcement): any {

    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');

    // tslint:disable-next-line:max-line-length
    return this.httpClient.post(`/category/${newAnnouncement.announcementsCategories}/type/${newAnnouncement.announcementType}`, JSON.stringify(newAnnouncement), { headers });
  }
}
