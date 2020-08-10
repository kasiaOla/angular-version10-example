import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'registration',
        data: { title: 'Rejestracja' },
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
      }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
