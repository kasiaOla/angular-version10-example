import { Component, OnInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];

  constructor() { }

  ngOnInit(): void {
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
