import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/authentication/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

}
