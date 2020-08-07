import { Component, OnInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/all-modules';
import { ColDef } from 'ag-grid-community';
import { AnnouncementService } from 'src/app/shared/shared-services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rowData: any[];
  public columnDefs: any[];
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

  constructor(public announcementService: AnnouncementService) {

   }

  ngOnInit(): void {

    this.announcementService.getAnnouncement().subscribe(req => {
      console.log('AnnouncementService', req);
    });
    this.columnDefs = [
      { headerName: 'Miasto', field: 'miasto', sortable: true, filter: true },
      { headerName: 'Cena', field: 'cena', sortable: true, filter: true },
      { headerName: 'Powierzchnia', field: 'powierzchnia', sortable: true, filter: true }
    ];
    this.rowData = [
      { miasto: 'Toyota', cena: 'Celica', powierzchnia: 35000 },
      { miasto: 'Ford', cena: 'Mondeo', powierzchnia: 32000 },
      { miasto: 'Porsche', cena: 'Boxter', powierzchnia: 72000 }
    ];
  }


}
