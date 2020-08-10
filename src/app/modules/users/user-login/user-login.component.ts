import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/authentication/auth.service';
import { UserSharedService } from '../../../shared/shared-services/user-shared.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers: [UserSharedService]
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userSharedService: UserSharedService,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched)
    );
  }

  login(): void {

    if (this.loginForm.dirty && this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe(data => {
          if (data.success === false) {
          } else if (data.success === true) {
            console.log('data.respons ', data.respons);
            this.userSharedService.shareUser(data.respons);
            this.router.navigate(['/']);
          }
          this.loginForm.reset();
        });
    }
  }
}
