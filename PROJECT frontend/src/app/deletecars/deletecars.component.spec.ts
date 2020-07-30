import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecarsComponent } from './deletecars.component';

describe('DeletecarsComponent', () => {
  let component: DeletecarsComponent;
  let fixture: ComponentFixture<DeletecarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
