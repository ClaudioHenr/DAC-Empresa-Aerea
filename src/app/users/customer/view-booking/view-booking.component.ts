import { Component, OnInit } from '@angular/core';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";
import { ModalBuyMilesComponent } from '../modals/modal-buy-miles/modal-buy-miles.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [
    NavbarCustomerComponent,
    ModalBuyMilesComponent
  ],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent implements OnInit {
  milesBalance: number = 0;
  purchaseHistory: any[] = [];
  usageHistory: any[] = [];

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
