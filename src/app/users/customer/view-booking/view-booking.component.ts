import { Component } from '@angular/core';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";
import { ModalBuyMilesComponent } from '../modals/modal-buy-miles/modal-buy-miles.component';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [
    NavbarCustomerComponent,
    ModalBuyMilesComponent
  ],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent {

}
