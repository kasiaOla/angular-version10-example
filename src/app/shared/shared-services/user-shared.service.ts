import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../../modules/users/user';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {
  // zapamietuje dane w innych komponentach
  private userSource = new BehaviorSubject<User>(null);
  public userContent$ = this.userSource.asObservable();

  constructor() {}

  shareUser(user: User): void {
    this.userSource.next(user);
  }
}
