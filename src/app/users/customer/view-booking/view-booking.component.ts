import { Component } from '@angular/core';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [NavbarCustomerComponent],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent {

}
