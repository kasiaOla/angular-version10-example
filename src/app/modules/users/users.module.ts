import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuardService } from '../core/authentication/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserComponent,
    ContactComponent,
    UserLoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserRegistrationComponent,
    UserComponent,
    ContactComponent,
    UserLoginComponent,
    ProfileComponent
  ]
})
export class UsersModule { }
