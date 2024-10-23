import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { Flight } from '../../../../shared/models/Flight.model';
import { CommonModule, NgFor } from '@angular/common';
import { BoardingModalComponent } from "../modals/boarding-modal/boarding-modal.component";
import { ModalConfirmFlightComponent } from "../modals/modal-confirm-flight/modal-confirm-flight.component";
import { ModalCancelFlightComponent } from "../modals/modal-cancel-flight/modal-cancel-flight.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-employee',
  standalone: true,
  imports: [
    NavbarComponent,
    NgFor,
    CommonModule,
    RouterLink,
    BoardingModalComponent,
    ModalConfirmFlightComponent,
    ModalCancelFlightComponent
],
  templateUrl: './home-employee.component.html',
  styleUrl: './home-employee.component.css'
})
export class HomeEmployeeComponent {
  listFlight: Flight[] = [
    { cod: "1234", dateDeparture: new Date(), departureAirport: "AeroportoA", destinationAirport: "AeroportoB", price: 2000, totalSeats: 100, occupiedSeats: 75 },
    { cod: "5678", dateDeparture: new Date('2024-09-18T14:30:00'), departureAirport: "AeroportoC", destinationAirport: "AeroportoD", price: 1500, totalSeats: 150, occupiedSeats: 80 },
    { cod: "9101", dateDeparture: new Date('2024-09-20T08:30:00'), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 },
    { cod: "9101", dateDeparture: new Date('2024-09-18T08:00:00'), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 },
    { cod: "9101", dateDeparture: new Date('2024-09-20T08:00:00'), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 },
    { cod: "9101", dateDeparture: new Date('2024-09-21T08:00:00'), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 },
    { cod: "1121", dateDeparture: new Date('2024-09-22T10:00:00'), departureAirport: "AeroportoG", destinationAirport: "AeroportoH", price: 2200, totalSeats: 180, occupiedSeats: 150 },
    { cod: "1121", dateDeparture: new Date('2024-09-21T10:00:00'), departureAirport: "AeroportoG", destinationAirport: "AeroportoH", price: 2200, totalSeats: 180, occupiedSeats: 150 },
    { cod: "1121", dateDeparture: new Date('2024-09-20T10:00:00'), departureAirport: "AeroportoG", destinationAirport: "AeroportoH", price: 2200, totalSeats: 180, occupiedSeats: 150 },
    { cod: "1121", dateDeparture: new Date('2024-09-16T10:00:00'), departureAirport: "AeroportoG", destinationAirport: "AeroportoH", price: 2200, totalSeats: 180, occupiedSeats: 150 },
    { cod: "3141", dateDeparture: new Date('2024-09-15T16:00:00'), departureAirport: "AeroportoI", destinationAirport: "AeroportoJ", price: 2500, totalSeats: 200, occupiedSeats: 190 }
  ]
  filteredFlights: Flight[] = []

  ngOnInit(): void {
    this.handleFlights()
  }

  handleFlights() {
    let now = new Date();
    let nowInHours = now.getTime()
    let hoursAhead = new Date(nowInHours + (48 * 60 * 60 * 1000));
    console.log("Data e hora 48 horas adiante:", hoursAhead.toLocaleString())
    this.filteredFlights = this.listFlight.filter(flight => {
      if (flight.dateDeparture) {
        return flight.dateDeparture < hoursAhead && flight.dateDeparture > now;
      }
      return false;
    });
  }
}
