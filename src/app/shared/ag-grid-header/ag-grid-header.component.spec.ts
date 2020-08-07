import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridHeaderComponent } from './ag-grid-header.component';

describe('AgGridHeaderComponent', () => {
  let component: AgGridHeaderComponent;
  let fixture: ComponentFixture<AgGridHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
