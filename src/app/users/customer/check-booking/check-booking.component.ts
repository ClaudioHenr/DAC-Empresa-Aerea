import { Component } from '@angular/core';
import { ModalCheckInComponent } from "../modals/modal-check-in/modal-check-in.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-booking',
  standalone: true,
  imports: [
    ModalCheckInComponent,
    CommonModule
  ],
  templateUrl: './check-booking.component.html',
  styleUrl: './check-booking.component.css'
})
export class CheckBookingComponent {

}
