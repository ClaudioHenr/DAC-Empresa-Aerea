import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";
import { StatusCreateBookingService } from '../services/status-create-booking.service';

@Component({
  selector: 'app-last-page-booking',
  standalone: true,
  imports: [
    NgIf, RouterModule,
    NavbarCustomerComponent
],
  templateUrl: './last-page-booking.component.html',
  styleUrl: './last-page-booking.component.css'
})
export class LastPageBookingComponent implements OnInit {
  currentScreen = 3;
  isOrderSuccessful = false;

  constructor(private statusCreateBooking: StatusCreateBookingService ) {}

  ngOnInit(): void {
    this.isOrderSuccessful = this.statusCreateBooking.getStatusCreateBooking()
  }

  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }


}
