import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddCategoryAnnouncementComponent } from './add-category-announcement/add-category-announcement.component';
import { AnnouncementService } from '../../shared-services/announcement.service';
import { AnnouncementComponent } from './announcement/announcement.component';


@NgModule({
  declarations: [
    AnnouncementComponent,
    AddAnnouncementComponent,
    AddCategoryAnnouncementComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AnnouncementComponent,
    AddAnnouncementComponent,
    AddCategoryAnnouncementComponent
  ],
  providers: [AnnouncementService]
})
export class AnnouncementModule { }
