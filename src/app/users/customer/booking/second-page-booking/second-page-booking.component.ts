import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";
import { HttpClient } from '@angular/common/http';

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
export class SecondPageBookingComponent implements OnInit {
  currentScreen = 2; // Define a tela atual, 1 para first-page-booking.component

  // Adicione métodos para mudar a tela, se necessário
  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }

  milesBalance: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCustomerData();
  }

  fetchCustomerData() {
    const customerId = 'ad237302-4b0c-48bf-abd9-d01a0c6e8a2e'; // Replace with actual customer ID
    this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
      this.milesBalance = data.miles;
    });
  }

}
