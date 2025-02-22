import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';


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
    loadChildren: () => import('./modules/announcements/announcement.module').then(m => m.AnnouncementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true, // debuggowanie routing
    useHash: true,
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
