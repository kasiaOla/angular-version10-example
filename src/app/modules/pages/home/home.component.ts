import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions } from '@ag-grid-community/all-modules';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { AnnouncementService } from 'src/app/shared/shared-services/announcement/announcement.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Announcement } from '../../announcements/announcement';
import { AgGridHeaderComponent } from '../../../shared/shared-ag-grid-header/ag-grid-header.component';
import { LoggerService } from '../../../shared/shared-services/logger/logger.service';
import { DataJsonService } from '../../../shared/shared-services/data-json/data-json.service';
import { tap } from 'rxjs/operators';


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
    this.dataJsonService.readDataJson().subscribe(dataJson => {
      if (dataJson) {
        // this.logger.info('typeof' + typeof dataJson);
        // for (const djson of (dataJson as any)) {
        //   this.logger.info('FOR officer.price ' + djson.price);
        //   // if (djson.price >= 500) {
        //   //   this.logger.info('FOR djson.name' + djson.name);
        //   // }

        // }
        // const officersIds1 = (dataJson as any).map(  (officer) => {
        //   this.logger.info('MAP officer.price ' + officer.price);

        //   return officer.price;
        // });
        // this.logger.info('officersIds1 ' + officersIds1);
        // const officersIds2 = (dataJson as any).map(officer => officer.price);
        // this.logger.info('officersIds2 ' + officersIds2);

        // const totalYears = (dataJson as any).reduce(  (accumulator, pilot) => {
        //   this.logger.info('REDUCE officer.price ' + pilot.price + ' accumulator ' + accumulator);

        //   return accumulator + pilot.price;
        // }, 1);
        // this.logger.info('REDUCE totalYears ' + totalYears);


        // const mostExpPilot = (dataJson as any).reduce((oldest, pilot) => {
        //   // tslint:disable-next-line:max-line-length
        //   this.logger.info('oldest.price : ' + oldest.years + ' pilot.years ' + pilot.years + ' oldest ' + oldest.years + ' pilot ' + pilot.years);
        //   this.logger.info('mostExpPilot : ' + (oldest.years || 0) > pilot.years ? 'old' + oldest.years : 'pil' + pilot.years);

        //   return (oldest.years || 0) > pilot.years ? oldest : pilot;
        // }, {});
        // //    this.logger.info('REDUCE mostExpPilot ' + mostExpPilot);
        // const rebels = (dataJson as any).filter(pilot => pilot.years === 2010);

        const totalJediScore = (dataJson as any)
          .map((jedi) => {
            this.logger.info('map ' + jedi.years);

            return jedi.years + jedi.years;
          })
          .filter((person) => {
            this.logger.info('Rfilter ' + person.years);

           return person.years === 2009;
         })
          .reduce((acc, score) => {
            this.logger.info('reduce ' + score);
            return acc + score;
          }, 0);
        this.logger.info('FILTER MAP REDUCE totalYears ' + totalJediScore);

      }

    });

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
