import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBookingComponent } from './comp-booking.component';

describe('CompBookingComponent', () => {
  let component: CompBookingComponent;
  let fixture: ComponentFixture<CompBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
