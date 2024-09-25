import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageBookingComponent } from './second-page-booking.component';

describe('SecondPageBookingComponent', () => {
  let component: SecondPageBookingComponent;
  let fixture: ComponentFixture<SecondPageBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
