import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebrandsComponent } from './deletebrands.component';

describe('DeletebrandsComponent', () => {
  let component: DeletebrandsComponent;
  let fixture: ComponentFixture<DeletebrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletebrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
