import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPageBookingComponent } from './last-page-booking.component';

describe('LastPageBookingComponent', () => {
  let component: LastPageBookingComponent;
  let fixture: ComponentFixture<LastPageBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastPageBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastPageBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
