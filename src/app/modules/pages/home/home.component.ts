import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions } from '@ag-grid-community/all-modules';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { AnnouncementService } from 'src/app/shared/shared-services/announcement/announcement.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Announcement } from '../../announcements/announcement';
import { AgGridHeaderComponent } from '../../../shared/shared-ag-grid-header/ag-grid-header.component';
import { LoggerService } from '../../../shared/shared-services/logger/logger.service';
import { DataJsonService } from '../../../shared/shared-services/data-json/data-json.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public rowDatatAnnouncement: Announcement[] = [];
  public gridApi: GridApi | undefined;
  public gridColumnApi!: ColumnApi;
  public columnDefs = [
    { headerName: 'Miasto', field: 'title', colId: 'title', editable: true },
    { headerName: 'Cena', field: 'price', colId: 'price' },
    { headerName: 'Powierzchnia', field: 'surface', colId: 'surface' }
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
    width: 350,
    resizable: true,
  };
  public frameworkComponents = {
    agColumnHeader: AgGridHeaderComponent,
  };
  public getDataAnnouncement$;
  public resutDataAnnouncement = new Subscription();

  constructor(public announcementService: AnnouncementService,
              private logger: LoggerService,
              private dataJsonService: DataJsonService) {
    this.getDataAnnouncement$ = this.announcementService.getAnnouncement();
  }

  ngOnInit(): void {
    /*
    this.dataJsonService.readDataJson().subscribe(dataJson => {
      if (dataJson) {
        const result = (dataJson as any)
          .map((data: any) => {
            this.logger.info('MAP ' + data.years);
            return data;
          })
          .filter((data: any) => {
            this.logger.info('FILTER ' +  data.years);
            return  data.years === 2010;
         })
          .reduce((valueStart: any, data: any) => {
            this.logger.info('REDUCE ' + data);
            return valueStart + data;
          }, 0);
        this.logger.info('FILTER MAP REDUCE result ' + result);
      }
    });
    */

    this.resutDataAnnouncement.add(this.getDataAnnouncement$.subscribe({
      next: (Res: Announcement[]) => {
        this.rowDatatAnnouncement = Res;
      },
      error: (Err: Error) => {
        this.logger.info('Błąd pobrania ogłoszeń. Error: ' + Err);
      },
      complete(): void { }
    }));
  }

  ngOnDestroy(): void {
    this.resutDataAnnouncement.unsubscribe();
  }

  onGridReady(params: { api: GridApi; columnApi: ColumnApi }): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
