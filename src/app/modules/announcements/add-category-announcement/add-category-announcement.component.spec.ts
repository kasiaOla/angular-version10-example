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

  it('Is the css class called container ', () => {
    fixture = TestBed.createComponent(AddCategoryAnnouncementComponent);
    const component = fixture.componentInstance;
    expect(fixture.debugElement.children[0].attributes.class).toEqual('container');
  });

  it('Test component AddCategoryAnnouncementComponent. Test create instance ', () => {
    fixture = TestBed.createComponent(AddCategoryAnnouncementComponent);
    const component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

});
