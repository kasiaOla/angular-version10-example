import { Component, OnInit, ViewChild } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular/lib/interfaces';

@Component({
  selector: 'app-ag-grid-header',
  templateUrl: './ag-grid-header.component.html',
  styleUrls: ['./ag-grid-header.component.scss']
})
export class AgGridHeaderComponent implements IHeaderAngularComp {

  params: any;
  public ascSort = '';
  public descSort = '';
  public noSort = '';
  public isSortVisible = true;
  @ViewChild('menuButton', {static: false}) public menuButton: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
    this.isSortVisible = !params.hideSort;
    params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    this.onSortChanged();
  }

  onMenuClicked(event: MouseEvent): void {
    this.params.showColumnMenu(this.menuButton.nativeElement);
    event.stopPropagation();
  }

  onSortChanged(): void {
    this.ascSort = this.descSort = this.noSort = 'inactive';
    if (this.params.column.isSortAscending()) {
      this.ascSort = 'active';
    } else if (this.params.column.isSortDescending()) {
      this.descSort = 'active';
    } else {
      this.noSort = 'active';
    }
  }

  onColumnSortRequested(event: any): void {
    let order = '';

    if (this.params.column.isSortAscending()) {
      order = 'desc';
    } else if (this.params.column.isSortDescending()) {
      order = '';
    } else {
      order = 'asc';
    }
    this.params.setSort(order, event.shiftKey);
  }

}
