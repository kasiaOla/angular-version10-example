import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCategoryAnnouncementComponent } from './add-category-announcement.component';

describe('AddCategoryAnnouncementComponent', () => {
  let component: AddCategoryAnnouncementComponent;
  let fixture: ComponentFixture<AddCategoryAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
