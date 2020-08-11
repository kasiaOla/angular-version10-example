import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authentication/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  loginOut(): void {
    this.authService.loginOut();
  }
}
