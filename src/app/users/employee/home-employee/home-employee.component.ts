import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { Flight } from '../../../../shared/models/Flight.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-employee',
  standalone: true,
  imports: [
    NavbarComponent,
    NgFor
  ],
  templateUrl: './home-employee.component.html',
  styleUrl: './home-employee.component.css'
})
export class HomeEmployeeComponent {
  tableStyle: string = "table table-striped"

  listFlight: Flight[] = [
    { cod: "1234", dateDeparture: new Date().toLocaleString(), departureAirport: "AeroportoA", destinationAirport: "AeroportoB", price: 2000, totalSeats: 100, occupiedSeats: 75 },
    { cod: "5678", dateDeparture: new Date('2024-09-20T14:30:00').toLocaleString(), departureAirport: "AeroportoC", destinationAirport: "AeroportoD", price: 1500, totalSeats: 150, occupiedSeats: 80 },
    { cod: "9101", dateDeparture: new Date('2024-09-21T08:00:00').toLocaleString(), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 },
    { cod: "1121", dateDeparture: new Date('2024-09-22T10:00:00').toLocaleString(), departureAirport: "AeroportoG", destinationAirport: "AeroportoH", price: 2200, totalSeats: 180, occupiedSeats: 150 },
    { cod: "3141", dateDeparture: new Date('2024-09-23T16:00:00').toLocaleString(), departureAirport: "AeroportoI", destinationAirport: "AeroportoJ", price: 2500, totalSeats: 200, occupiedSeats: 190 }
  ]

}
