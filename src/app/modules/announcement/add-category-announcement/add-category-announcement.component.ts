import { Component, OnInit } from '@angular/core';
import { AnnouncementsCategories, AnnouncementType } from '../announcement';


@Component({
  selector: 'app-add-category-announcement',
  templateUrl: './add-category-announcement.component.html',
  styleUrls: ['./add-category-announcement.component.scss']
})
export class AddCategoryAnnouncementComponent implements OnInit {

  announcementsCategories?: AnnouncementsCategories;
  AnnouncementsCategories = AnnouncementsCategories;
  announcementsCategoriesLength =  Object.values(AnnouncementsCategories).length;
  announcementType?: AnnouncementType;
  AnnouncementType = AnnouncementType;

  constructor() { }

  ngOnInit(): void {
  }
  keys(): Array<string>{
    const keys = Object.keys(AnnouncementsCategories);
    return keys.slice(keys.length / 2, keys.length );
  }
}
