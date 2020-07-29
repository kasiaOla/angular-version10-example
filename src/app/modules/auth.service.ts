import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './users/user';
import { Observable } from 'rxjs';
import { Response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;
  constructor(private router: Router,
              private httpClient: HttpClient) { }


  public registration(newUser: User): any {

    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');

    return this.httpClient.post('/register', JSON.stringify(newUser), { headers });
  }

  login(user: User): Observable<any> {
    console.log('newUser', user);

    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    this.isLogged = true;
    return this.httpClient.post('/login', JSON.stringify(user), { headers });
  }

  loginOut(): void {
     this.isLogged = false;
  }
}
