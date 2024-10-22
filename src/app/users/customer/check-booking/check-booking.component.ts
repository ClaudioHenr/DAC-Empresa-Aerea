import { Component } from '@angular/core';
import { ModalCheckInComponent } from "../modals/modal-check-in/modal-check-in.component";
import { CommonModule } from '@angular/common';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";

@Component({
  selector: 'app-check-booking',
  standalone: true,
  imports: [
    ModalCheckInComponent,
    CommonModule,
    NavbarCustomerComponent
],
  templateUrl: './check-booking.component.html',
  styleUrl: './check-booking.component.css'
})
export class CheckBookingComponent {

}
