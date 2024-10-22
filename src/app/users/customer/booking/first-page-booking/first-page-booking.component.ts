import { Component } from '@angular/core';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-first-page-booking',
  standalone: true,
  imports: [
    NavbarCustomerComponent,
    RouterLink
  ],
  templateUrl: './first-page-booking.component.html',
  styleUrl: './first-page-booking.component.css'
})
export class FirstPageBookingComponent {
  currentScreen = 1; // Define a tela atual, 1 para first-page-booking.component

  // Adicione métodos para mudar a tela, se necessário
  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }
}
