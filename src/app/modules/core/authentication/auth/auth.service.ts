import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Session } from '../../../users/user';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from '../../../../shared/shared-services/logger/logger.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSession = new BehaviorSubject<Session>(null);
  public isAuthenticated = false;

  // state - stan czy użytkownik jest zalogowany
  state = this.userSession.pipe(
    map(session => session && !!session.token),
    tap(state => this.isAuthenticated = state)
  );

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  public registration(newUser: User): Observable<any> {
    return this.httpClient.post<User>(`/register`, newUser, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('Add User'))
      );
  }

  public login(user: User): Observable<Session> {
    return this.httpClient.post<Session>('/login', user, this.httpOptions).pipe(
      tap(state => {
        this.userSession.next(state); this.isAuthenticated = true;
      }),
      catchError(this.handleError<User>('Login user'))
    );
  }

  public loginOut(): void {
    this.isAuthenticated = false;
    this.userSession.next(null);
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      this.logger.error(error);
      this.logger.info(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getToken(): string | null {
    // getValue - zwraca ostatnią wartość w BehaviorSubject
    const session = this.userSession.getValue();
    return session && session.token;
  }

  getCurrentUser(): Session | string {
    const session = this.userSession.getValue();
    return session && session !== null && session.respons !== null ? session.respons.username : session;
  }
  constructor(private httpClient: HttpClient, private logger: LoggerService) { }

}
