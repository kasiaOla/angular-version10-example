import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.getAuthorizedRequest(req));
  }

  getAuthorizedRequest(req: HttpRequest<any>): HttpRequest<any>{
    return req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    });
  }
}
