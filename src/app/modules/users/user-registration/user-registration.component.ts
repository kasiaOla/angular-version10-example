import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { User, CustomerType } from '../user';
import { AuthService } from '../../core/authentication/auth/auth.service';
import { LoggerService } from '../../../shared/shared-services/logger/logger.service';
import { HttpErrorResponse } from '@angular/common/http';


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
      username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      password: this.fb.control('', [
        Validators.required,
        this.validatePassword
      ]), // duża litera, mała litera i liczbę  Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')
      email: this.fb.control('', [Validators.required, Validators.email]),
      type: this.makeFormControl(),
    });
    console.log(this.registrationForm)
  }

  makeFormControl(): FormControl {
    const cloned = new FormControl('', [Validators.required]);
    return cloned;
  }

  validatePassword<ValidatorFn>(control: FormControl): ValidationErrors {
    const hasUppercase = control.value.match(/[A-Z]/);
    const hasLowercase = control.value.match(/[a-z]/);

    if (hasUppercase && hasLowercase) {
      return null;
    }
    if (hasUppercase === null) {
      return {
        'uppercase': false,
      } as ValidationErrors;

    }
    if (hasLowercase === null) {
      return {
        'lowercase': false,
      } as ValidationErrors;

    } else {
      return {
        'password': true,
        'uppercase': true,
        'lowercase': true,
      } as ValidationErrors;
    }
  }


   get f(): { [key: string]: AbstractControl; } {
    return this.registrationForm.controls;
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
      }, (Error: any) => {
        if (Error instanceof HttpErrorResponse) {
          this.logger.error('Error name: ' + Error.error);
          this.logger.error('Error status text: ' + Error.statusText);
          this.logger.error('Error status: ' + Error.status);
        }
      });
    }
  }
}
