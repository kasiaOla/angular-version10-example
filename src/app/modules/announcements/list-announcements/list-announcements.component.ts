import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../shared/shared-services/announcement/announcement.service';
import { Announcement } from '../announcement';
import { AuthService } from '../../core/authentication/auth/auth.service';


@Component({
  selector: 'app-list-announcements',
  templateUrl: './list-announcements.component.html',
  styleUrls: ['./list-announcements.component.scss']
})
export class ListAnnouncementsComponent implements OnInit {
  private idUser = '' + this.authService.getCurrentUser();
  public listAnnouncements = this.announcementService.getAnnouncementUser(this.idUser);

  constructor(public announcementService: AnnouncementService,
              public authService: AuthService) {}

  ngOnInit(): void {}

  removeAnnouncement(value: Announcement, id: string): void {}
}
