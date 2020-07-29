import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, CustomerType } from '../user';
import { AuthService } from '../../auth.service';


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
              private authService: AuthService,
              private router: Router) {
  }


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
          if (data === false) {
          } else {
            this.router.navigate(['']);
          }
          this.registrationForm.reset();
        });
    }
  }
}
