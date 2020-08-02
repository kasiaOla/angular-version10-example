import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { UsersModule } from '../users/users.module';
import { AnnouncementModule } from '../announcements/announcement.module';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatTabsModule,
    RouterModule,
    UsersModule,
    AnnouncementModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
  ]
})
export class CoreModule { }
