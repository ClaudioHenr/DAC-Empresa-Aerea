import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageBookingComponent } from './first-page-booking.component';

describe('FirstPageBookingComponent', () => {
  let component: FirstPageBookingComponent;
  let fixture: ComponentFixture<FirstPageBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPageBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstPageBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
