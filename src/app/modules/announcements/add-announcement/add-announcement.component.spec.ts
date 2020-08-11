import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AddAnnouncementComponent } from './add-announcement.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AnnouncementService } from '../../../shared/shared-services/announcement.service';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from '../../../shared/shared-services/logger/logger.service';


const mockAnnouncementService = {
  getObservable: () => ({ subscribe: () => { } }),
};

describe('AddAnnouncementComponent', () => {
  let component: AddAnnouncementComponent;
  let fixture: ComponentFixture<AddAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [AddAnnouncementComponent],
      providers: [
        FormBuilder,
        LoggerService,
        AnnouncementService,
        {
          provide: ActivatedRoute, useValue: {
            snapshot: { params: { id: 1 } }
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
