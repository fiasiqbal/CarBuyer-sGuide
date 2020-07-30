import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbrandsComponent } from './editbrands.component';

describe('EditbrandsComponent', () => {
  let component: EditbrandsComponent;
  let fixture: ComponentFixture<EditbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
