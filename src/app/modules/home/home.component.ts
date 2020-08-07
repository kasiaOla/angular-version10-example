import { Component, OnInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/all-modules';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { AnnouncementService } from 'src/app/shared/shared-services/announcement.service';
import { Announcement } from '../announcements/announcement';
import { LoggerService } from '../../shared/shared-services/logger.service';
import { AgGridHeaderComponent } from '../../shared/ag-grid-header/ag-grid-header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rowDatatAnnouncement: Announcement[] = [];
  gridApi: GridApi | undefined;
  columnApi!: ColumnApi;
  public columnDefs = [
    { headerName: 'Miasto', field: 'title', colId: 'title', sortable: true, filter: true },
    { headerName: 'Cena', field: 'price', colId: 'price', sortable: true, filter: true },
    { headerName: 'Powierzchnia', field: 'surface', colId: 'surface', sortable: true, filter: true }
  ];
  public gridOptions: GridOptions = {
    suppressRowClickSelection: false,
    rowMultiSelectWithClick: false,
  };
  public defaultColumn: ColDef = {
    filter: true,
      sortable: true,
      headerCheckboxSelectionFilteredOnly: true,
      filterParams: {
        clearButton: true
      },
    width: 250,
    resizable: true,
  };
  public frameworkComponents = {
   agColumnHeader: AgGridHeaderComponent,
  };

  constructor(public announcementService: AnnouncementService, private logger: LoggerService) {
    this.announcementService.getAnnouncement().subscribe({
      next: Res => {
          this.rowDatatAnnouncement = Res['respons'];
       },
      error: Err => {
        this.logger.info('Błąd pobrania ogłoszeń. Error: ' + Err);
      },
      complete(): void {}
    });
  }

  ngOnInit(): void {}
  onGridReady(params: { api: GridApi; columnApi: ColumnApi }) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

}
