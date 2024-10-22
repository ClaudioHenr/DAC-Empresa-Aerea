import { Component } from '@angular/core';
import { ModalBuyMilesComponent } from '../modals/modal-buy-miles/modal-buy-miles.component';
import { ModalCancelReserveComponent } from "../modals/modal-cancel-reserve/modal-cancel-reserve.component";
import { Flight } from '../../../../shared/models/Flight.model';
import { CommonModule, NgFor } from '@angular/common';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    ModalBuyMilesComponent,
    ModalCancelReserveComponent,
    NavbarCustomerComponent
],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  listFlight: Flight[] = [
    { cod: "1234", dateDeparture: new Date(), departureAirport: "AeroportoA", destinationAirport: "AeroportoB", price: 2000, totalSeats: 100, occupiedSeats: 75 },
    { cod: "5678", dateDeparture: new Date('2024-09-18T14:30:00'), departureAirport: "AeroportoC", destinationAirport: "AeroportoD", price: 1500, totalSeats: 150, occupiedSeats: 80 },
    { cod: "9101", dateDeparture: new Date('2024-09-20T08:30:00'), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 },
    { cod: "9101", dateDeparture: new Date('2024-09-18T08:00:00'), departureAirport: "AeroportoE", destinationAirport: "AeroportoF", price: 1800, totalSeats: 120, occupiedSeats: 100 }
  ]

}