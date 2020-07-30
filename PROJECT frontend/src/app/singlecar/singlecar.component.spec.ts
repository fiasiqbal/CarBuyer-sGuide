import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecarComponent } from './singlecar.component';

describe('SinglecarComponent', () => {
  let component: SinglecarComponent;
  let fixture: ComponentFixture<SinglecarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
