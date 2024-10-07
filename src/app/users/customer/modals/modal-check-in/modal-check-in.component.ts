import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReusableModalComponent } from "../../../../../shared/modals/base/reusable-modal/reusable-modal.component";
import { Flight } from '../../../../../shared/models/Flight.model';

@Component({
  selector: 'app-modal-check-in',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    ReusableModalComponent
],
  templateUrl: './modal-check-in.component.html',
  styleUrl: './modal-check-in.component.css'
})

export class ModalCheckInComponent {
  flights: Flight[] = [
    { cod: "1234", dateDeparture: new Date(), departureAirport: "AeroportoA", destinationAirport: "AeroportoB", price: 2000, totalSeats: 100, occupiedSeats: 75 },
    { cod: "5678", dateDeparture: new Date('2024-09-18T14:30:00'), departureAirport: "AeroportoC", destinationAirport: "AeroportoD", price: 1500, totalSeats: 150, occupiedSeats: 80 },
    { cod: "9101", dateDeparture: new Date('2024-09-20T08:30:00'), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 },
    { cod: "9101", dateDeparture: new Date('2024-09-18T08:00:00'), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 }
  ]
  // @Input() flights: { 
  //   origin: string; 
  //   destination: string; 
  //   time: string 
  // }[] = [];
  // @Output() closeModalEvent = new EventEmitter<void>();
  // @Output() checkInEvent = new EventEmitter<void>();

  checkIn() {
  }
}