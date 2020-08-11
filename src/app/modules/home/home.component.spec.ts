import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AnnouncementService } from 'src/app/shared/shared-services/announcement.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from '../../shared/shared-services/logger/logger.service';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridHeaderComponent } from '../../shared/shared-ag-grid-header/ag-grid-header.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AgGridModule.withComponents([AgGridHeaderComponent])
      ],
      providers: [AnnouncementService, LoggerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('grid API is not available until `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });

  it('Test component app-home. The test value `rowDatatAnnouncement` is equal true ', async(() => {
    fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.rowDatatAnnouncement).toBeTruthy();
  }));
});
