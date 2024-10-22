import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";

@Component({
  selector: 'app-create-flight',
  standalone: true,
  imports: [NavbarComponent, NavbarCustomerComponent],
  templateUrl: './create-flight.component.html',
  styleUrl: './create-flight.component.css'
})
export class CreateFlightComponent {

}
