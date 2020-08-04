import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementsCategories, AnnouncementType, Announcement } from '../announcement';
import { AnnouncementService } from 'src/app/shared-services/announcement.service';
import { LoggerService } from '../../../shared-services/logger.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  public announcementForm: FormGroup;

  announcementsCategories?: AnnouncementsCategories;
  AnnouncementsCategories = AnnouncementsCategories;
  announcementType?: AnnouncementType;
  AnnouncementType = AnnouncementType;
  id_category: string;
  id_type: string;

  constructor(private fb: FormBuilder,
    private logger: LoggerService,
    private announcementService: AnnouncementService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.id_category = +this.route.snapshot.paramMap.get('id_category'); // sniszczyc shaphot ostatnia wersje komponentu
    // this.id_type = +this.route.snapshot.paramMap.get('id_type');
    this.announcementForm = this.fb.group({

      title: this.makeFormControl(),
      price: this.makeFormControl(),
      surface: this.makeFormControl(),
      pricePerM: this.makeFormControl(),
      numberOfRooms: this.makeFormControl(),
      address: new FormGroup({
        street: this.makeFormControl(),
        houseNumber: this.makeFormControl(),
        postCode: this.makeFormControl(),
        city: this.makeFormControl(),
      }),
      multimedia: this.makeFormControl(),
      description: this.makeFormControl(),
      floor: this.makeFormControl(),
    });

    this.route.paramMap.subscribe(params => {
      this.id_category = params.get('id_category');
      this.announcementsCategories = AnnouncementsCategories[this.id_category];
    });
    this.route.paramMap.subscribe(params => {
      this.id_type = params.get('id_type');
      this.announcementType = AnnouncementType[this.id_type];
    });
  }

  makeFormControl(): FormControl {
    const cloned = new FormControl(null, [Validators.required]);
    return cloned;
  }


  addAnnouncement(): void {
    const setAnnouncement: Announcement = {
      title: this.announcementForm.value.title,
      price: this.announcementForm.value.price,
      surface: this.announcementForm.value.surface,
      pricePerM: this.announcementForm.value.pricePerM,
      numberOfRooms: this.announcementForm.value.numberOfRooms,
      address: {
        street: this.announcementForm.value.address.street,
        houseNumber: this.announcementForm.value.address.houseNumber,
        postCode: this.announcementForm.value.address.postCode,
        city: this.announcementForm.value.address.city,
      },
      announcementsCategories: AnnouncementsCategories[this.id_category],
      announcementType: AnnouncementType[this.id_type],
      multimedia: this.announcementForm.value.multimedia,
      description: this.announcementForm.value.description,
      floor: this.announcementForm.value.floor,
    };

    this.announcementService.addAnnouncement(setAnnouncement, this.id_category, this.id_type)
      .subscribe(data => {
        Syntax:
        switch (data.success) {
          case false: {
            this.logger.error(`Error code ${data.errcode}`);
            break;
          }
          case true: {
            this.logger.info('The advertisement has been correctly added');
            this.announcementForm.reset();
            break;
          }
          default: {
            this.announcementForm.reset();
            break;
          }
        }
      });
  }
}
