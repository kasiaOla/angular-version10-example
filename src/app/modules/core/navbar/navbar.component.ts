import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { UserSharedService } from '../../../shared/shared-services/user-shared.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public userName: string;

  constructor(public authService: AuthService,
              private userSharedService: UserSharedService) {

  }

  ngOnInit(): void {
    this.subscription = this.userSharedService.userContent$.subscribe((user) => {
      this.userName = user.name;
      console.log('0 this.userName ',user)
    });
   }

  ngOnDestroy(): void {
    console.log('1 this.userName unsubscribe', this.userName)

   // this.subscription.unsubscribe();
  }

  loginOut(): void {
    this.authService.loginOut();
  }
}
