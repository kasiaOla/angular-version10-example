import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuardService } from '../core/authentication/auth-guard/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'registration',
        data: { title: 'Rejestracja' },
        canActivate: [AuthGuardService], // jeśli false blokuje przejscie do ścieżki
        component: UserRegistrationComponent,
      },
      {
        path: 'login',
        data: { title: 'Zaloguj' },
        component: UserLoginComponent,
      },
      {
        path: 'contact',
        data: { title: 'Kontakt' },
        component: ContactComponent,
      },
      {
        path: 'profile',
        data: { title: 'Profil' },
        component: ProfileComponent,
      },
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
