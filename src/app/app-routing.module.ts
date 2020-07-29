import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnnouncementModule } from './modules/announcement/announcement.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'announcement',
    loadChildren: () => import('./modules/announcement/announcement.module').then(m => m.AnnouncementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true,
    // errorHandler: () => {},
    // initialNavigation: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
