import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Announcement } from '../../modules/announcements/announcement';
import { catchError, tap, share } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private logger: LoggerService) { }

  public addAnnouncement(newAnnouncement: Partial<Announcement>, idCategory: string, idType: string): any {
    return this.httpClient.post<Announcement>(`/category/${idCategory}/type/${idType}`, newAnnouncement, this.httpOptions)
      .pipe(
        catchError(this.handleError<Announcement>('Add Announcement'))
      );
  }

  public getAnnouncement(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(`/api/get-announcements`).pipe(
      tap(announcements => this.logger.info('Announcements retrieved!' + announcements)), share()
    );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      this.logger.error(error);
      this.logger.info(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
