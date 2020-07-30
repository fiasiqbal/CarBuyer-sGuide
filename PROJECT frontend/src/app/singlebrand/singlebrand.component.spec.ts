import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebrandComponent } from './singlebrand.component';

describe('SinglebrandComponent', () => {
  let component: SinglebrandComponent;
  let fixture: ComponentFixture<SinglebrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglebrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglebrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
