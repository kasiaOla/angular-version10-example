import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Address, AnnouncementsCategories, AnnouncementType, Market } from '../announcement';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  announcementForm: FormGroup;

  // id?: number;
  title?: string;
  price?: string;
  surface?: string;
  pricePerM?: string;
  numberOfRooms?: number;
  address?: Address;
  announcementsCategories?: AnnouncementsCategories;
  AnnouncementsCategories = AnnouncementsCategories;
  announcementType?: AnnouncementType;
  AnnouncementType = AnnouncementType;
  market?: Market;
  Market = Market;

  multimedia?: Array<any>;
  description: string;
  floor: number;
  id_category: string;
  id_type: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {

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
      announcementsCategories: this.makeFormControl(),
      announcementType: this.makeFormControl(),
      market: this.makeFormControl(),
      multimedia: this.makeFormControl(),
      description: this.makeFormControl(),
      floor: this.makeFormControl(),
    });
  }

  ngOnInit(): void {
    // this.id_category = +this.route.snapshot.paramMap.get('id_category'); // sniszczyc shaphot ostatnia wersje komponentu
    // this.id_type = +this.route.snapshot.paramMap.get('id_type');

    this.route.paramMap.subscribe(params => {
      this.id_category = params.get('id_category');
      console.log('this.id_category ', this.id_category);
      this.announcementsCategories = AnnouncementsCategories[this.id_category];
      console.log('AnnouncementsCategories', AnnouncementsCategories[this.id_category]);

    });
    this.route.paramMap.subscribe(params => {
      this.id_type = params.get('id_type');
      this.announcementType = AnnouncementType[this.id_type];
      console.log('AnnouncementType', AnnouncementType[this.id_type]);
      // this.announcementForm.setValue({ announcementsCategories: AnnouncementType[this.id_type] });
      this.announcementForm.controls['announcementsCategories'].patchValue(AnnouncementType[this.id_type]);

    });

  }
  // tslint:disable-next-line:typedef
  get f() { return this.announcementForm.controls; }
  makeFormControl(): FormControl {
    const cloned = new FormControl('', [Validators.required]);
    return cloned;
  }

  addAnnouncement() {
  }
}
