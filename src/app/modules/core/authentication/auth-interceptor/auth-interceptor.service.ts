import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { LoggerService } from '../../../../shared/shared-services/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService,
              private logger: LoggerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> | Observable<any> {
    return next.handle(this.getAuthorizedRequest(req)).pipe(
      catchError((Error: any, caught) => {
        if (Error instanceof HttpErrorResponse && Error.status === 401) {
          this.logger.error('Authorization Request ');
          return empty();
        } else if (Error instanceof HttpErrorResponse && Error.status === 403) {
          this.logger.error('Forbidden');
          return empty();
        } else if (Error instanceof HttpErrorResponse && Error.status === 404) {
          this.logger.error('Not Found');
          return empty(); // empty() - przerwanie obsługi
        }
        return throwError(Error);
      })
    );
  }

  getAuthorizedRequest(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    });
  }
}
