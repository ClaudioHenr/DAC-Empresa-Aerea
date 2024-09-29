import { Component } from '@angular/core';

@Component({
  selector: 'app-second-page-booking',
  standalone: true,
  imports: [],
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
