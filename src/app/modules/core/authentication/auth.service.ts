import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../users/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;
  constructor(private httpClient: HttpClient) { }

  public registration(newUser: User): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');

    return this.httpClient.post('/register', JSON.stringify(newUser), { headers });
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
}
