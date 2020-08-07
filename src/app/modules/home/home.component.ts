import { Component, OnInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/all-modules';
import { ColDef } from 'ag-grid-community';
import { AnnouncementService } from 'src/app/shared/shared-services/announcement.service';
import { Announcement } from '../announcements/announcement';
import { LoggerService } from '../../shared/shared-services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rowData: any[];
  public rowDatatAnnouncement: Announcement[] = [];

  public columnDefs = [
    { headerName: 'Miasto', field: 'title', colId: 'title', sortable: true, filter: true },
    { headerName: 'Cena', field: 'price', colId: 'price', sortable: true, filter: true },
    { headerName: 'Powierzchnia', field: 'surface', colId: 'surface', sortable: true, filter: true }
  ];
  public gridOptions: GridOptions = {
    suppressRowClickSelection: false,
    rowMultiSelectWithClick: false,
  };

  defaultColumn: ColDef = {
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      clearButton: true
    },
    width: 150,
    resizable: true,
    headerCheckboxSelectionFilteredOnly: true,
  };

  constructor(public announcementService: AnnouncementService, private logger: LoggerService,) {

    this.announcementService.getAnnouncement().subscribe({
      next: Res => {
          this.rowDatatAnnouncement = Res['respons'];
       },
      error: Err => {
        this.logger.info('Błąd pobrania ogłoszeń. Error: ' + Err);
      },
      complete( ): void { }
    });
  }

  ngOnInit(): void { }

}
