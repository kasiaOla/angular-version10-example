import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../shared/shared-services/announcement/announcement.service';
import { Announcement } from '../announcement';


@Component({
  selector: 'app-list-announcements',
  templateUrl: './list-announcements.component.html',
  styleUrls: ['./list-announcements.component.scss']
})
export class ListAnnouncementsComponent implements OnInit {

  public listAnnouncements = this.announcementService.getAnnouncement();

  constructor(public announcementService: AnnouncementService) {}

  ngOnInit(): void {}

  removeAnnouncement(value: Announcement, id: string): void {}
}
