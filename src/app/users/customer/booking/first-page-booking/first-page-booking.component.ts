import { Component, OnInit } from '@angular/core';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
export class FirstPageBookingComponent implements OnInit {
  currentScreen = 1; // Define a tela atual, 1 para first-page-booking.component

  milesBalance: number = 0;
  purchaseHistory: any[] = [];
  usageHistory: any[] = [];

  // Adicione métodos para mudar a tela, se necessário
  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }

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
