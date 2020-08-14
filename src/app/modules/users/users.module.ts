import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthInterceptorService } from '../core/authentication/auth-interceptor/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from '../pages/contact/contact.component';
import { DeactivateGuardService } from '../core/authentication/deactivate-guard/deactivate-guard.service';


@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserComponent,
    ContactComponent,
    UserLoginComponent,
    UserProfileComponent,
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
    UserProfileComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true // przekazanie wszystkich np serviców do tablicy HTTP_INTERCEPTORS
    },
    DeactivateGuardService
  ]
})
export class UsersModule { }
