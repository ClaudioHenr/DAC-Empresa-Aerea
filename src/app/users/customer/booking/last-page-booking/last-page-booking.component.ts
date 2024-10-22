import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";

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
export class LastPageBookingComponent {
  currentScreen = 3;
  isOrderSuccessful = false;

  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }
}
