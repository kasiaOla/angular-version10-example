import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../modules/users/user';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {

  private userSource = new Subject<User>();
  public userContent$ = this.userSource.asObservable();

  constructor() {}

  shareUser(user: User): void {
    this.userSource.next(user);
  }
}
