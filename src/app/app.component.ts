import { Component } from '@angular/core';
import { AuthService } from './modules/core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(protected auth: AuthService,  private router: Router){
    this.auth.state.subscribe(authorized => {
      authorized ? this.router.navigate(['user/profile']) :  this.router.navigate(['/']);
    });
  }
}
