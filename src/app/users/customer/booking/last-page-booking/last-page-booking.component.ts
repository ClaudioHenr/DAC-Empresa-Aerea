import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-last-page-booking',
  standalone: true,
  imports: [
    NgIf, RouterModule
  ],
  templateUrl: './last-page-booking.component.html',
  styleUrl: './last-page-booking.component.css'
})
export class LastPageBookingComponent {
  currentScreen = 3;
  isOrderSuccessful = true;

  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }
}
