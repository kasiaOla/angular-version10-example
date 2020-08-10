import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, CustomerType } from '../user';
import { AuthService } from '../../core/authentication/auth.service';
import { LoggerService } from '../../../shared/shared-services/logger.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  userName: string;
  password: string;
  email: string;
  type: CustomerType;
  CustomerType = CustomerType;
  registrationForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder,
              private logger: LoggerService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: this.makeFormControl(),
      password: this.makeFormControl(),
      email: this.makeFormControl(),
      type: this.makeFormControl(),
    });
  }

  makeFormControl(): FormControl {
    const cloned = new FormControl('', [Validators.required]);
    return cloned;
  }

  registration(): void {
    if (this.registrationForm.dirty && this.registrationForm.valid) {

      this.authService.registration(this.registrationForm.value).subscribe(data => {
        // data - jest Observerem
        switch (data.success) {
          case false: {
            this.logger.error(`Error code ${data.message}`);
            break;
          }
          case true: {
            this.logger.info('User created successfully, please login to access your account.');
            this.router.navigate(['user/login']);
            this.registrationForm.reset();
            break;
          }
          default: {
            this.registrationForm.reset();
            break;
          }
        }
      });
    }
  }
}
