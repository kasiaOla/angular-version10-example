import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../users/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggerService } from '../../../shared/shared-services/logger.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public isLogged = false;
  constructor(private httpClient: HttpClient, private logger: LoggerService) { }

  public registration(newUser: User): Observable<any> {
    return this.httpClient.post<User>(`/register`, newUser, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('Add User'))
      );
  }

  public login(user: User): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    this.isLogged = true;
    return this.httpClient.post('/login', JSON.stringify(user), { headers });
  }

  public loginOut(): void {
    this.isLogged = false;
  }
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      this.logger.error(error);
      this.logger.info(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
