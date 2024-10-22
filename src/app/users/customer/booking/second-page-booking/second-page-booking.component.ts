import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";

@Component({
  selector: 'app-second-page-booking',
  standalone: true,
  imports: [
    RouterLink,
    NavbarCustomerComponent
],
  templateUrl: './second-page-booking.component.html',
  styleUrl: './second-page-booking.component.css'
})
export class SecondPageBookingComponent {
  currentScreen = 2; // Define a tela atual, 1 para first-page-booking.component

  // Adicione métodos para mudar a tela, se necessário
  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }

}
