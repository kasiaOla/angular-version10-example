import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AddCategoryAnnouncementComponent } from './add-category-announcement/add-category-announcement.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
