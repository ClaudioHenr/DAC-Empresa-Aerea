import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalBuyMilesComponent } from '../modals/modal-buy-miles/modal-buy-miles.component';
import { ModalCancelReserveComponent } from '../modals/modal-cancel-reserve/modal-cancel-reserve.component';
import { Flight } from '../../../../shared/models/Flight.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../authentication/login/services/login.service';
import { CustomerHomeService } from './services/customer-home.service';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    NgIf,
    CommonModule,
    ModalBuyMilesComponent,
    ModalCancelReserveComponent,
    NavbarCustomerComponent
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent implements OnInit {
  listFlight: Flight[] = [];
  milesBalance: number = 0;

  constructor(private http: HttpClient, private loginService: LoginService, private customerHomeService: CustomerHomeService) {}

  ngOnInit() {
    this.getCustomerData();
    this.fetchFlights();
  }

  getCustomerData() {
    const user = this.loginService.getLocalStorage("user")
    this.milesBalance = user.miles
    // const customerId = 'ad237302-4b0c-48bf-abd9-d01a0c6e8a2e'; // Replace with actual customer ID
    // this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
    //   this.milesBalance = data.miles;
    // });
  }

  async fetchFlights() {
    const flights = await this.customerHomeService.getFlights()
    console.log("Voos: ", flights.data.flights)
    this.listFlight = flights.data.flights
    this.listFlight.forEach(flight => console.log(flight.aeroportoOrigem))
    
  }
}