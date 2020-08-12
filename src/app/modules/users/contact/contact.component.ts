import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../shared/shared-services/location/location.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  locations = this.locationService.getLocations();

  constructor(public  locationService: LocationService) {}

  ngOnInit(): void {}
  search(value: any): void {}
}
