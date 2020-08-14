import { ListAnnouncementsComponent } from './list-announcements/list-announcements.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AddCategoryAnnouncementComponent } from './add-category-announcement/add-category-announcement.component';
import { AnnouncementComponent } from './announcement/announcement.component';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementComponent,
    children: [
      {
        path: 'category',
        data: { title: 'Wybierz kategorie' },
        component: AddCategoryAnnouncementComponent,
      },
      {
        path: 'category/:id_category/type/:id_type',
        data: { title: 'Dodaj ogłoszenie' },
        component: AddAnnouncementComponent,
        pathMatch: 'full'
      },
      {
        path: 'list-announcements',
        data: { title: 'Lista ogłoszeń' },
        component: ListAnnouncementsComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
