import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddCategoryAnnouncementComponent } from './add-category-announcement/add-category-announcement.component';
import { AnnouncementService } from '../../shared/shared-services/announcement/announcement.service';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ListAnnouncementsComponent } from './list-announcements/list-announcements.component';


@NgModule({
  declarations: [
    AnnouncementComponent,
    AddAnnouncementComponent,
    AddCategoryAnnouncementComponent,
    ListAnnouncementsComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    AnnouncementComponent,
    AddAnnouncementComponent,
    AddCategoryAnnouncementComponent,
    ListAnnouncementsComponent
  ],
  providers: [AnnouncementService]
})
export class AnnouncementModule { }
