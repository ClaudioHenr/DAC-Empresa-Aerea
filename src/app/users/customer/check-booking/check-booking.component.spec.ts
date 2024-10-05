import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBookingComponent } from './check-booking.component';

describe('CheckBookingComponent', () => {
  let component: CheckBookingComponent;
  let fixture: ComponentFixture<CheckBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
