import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalBuyMilesComponent } from '../modals/modal-buy-miles/modal-buy-miles.component';
import { ModalCancelReserveComponent } from '../modals/modal-cancel-reserve/modal-cancel-reserve.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../authentication/login/services/login.service';
import { ViewBookingService } from '../view-booking/services/view-booking.service';
import { BookingView } from '../../../../shared/models/BookingView.model';

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
  listBooking: BookingView[] = [];
  milesBalance: number = 0;
  user = this.loginService.getLocalStorage("user")

  constructor(
    private http: HttpClient, 
    private loginService: LoginService, 
    private viewBookingService: ViewBookingService
  ) {}

  ngOnInit() {
    this.getCustomerData();
    this.fetchBookings();
  }

  getCustomerData() {
    const user = this.loginService.getLocalStorage("user")
    this.milesBalance = user.miles
    // const customerId = 'ad237302-4b0c-48bf-abd9-d01a0c6e8a2e'; // Replace with actual customer ID
    // this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
    //   this.milesBalance = data.miles;
    // });
  }

  async fetchBookings() {
    const customerId = this.user.id
    const result = await this.viewBookingService.getBookings("e1c347cc-056b-4a76-b371-262eae7140b0")
    this.listBooking = result.data.bookings    
  }

  getStatusClass(status: string | undefined): string {
    if (status) {
      switch (status.toLowerCase()) {
          case 'confirmada':
              return 'text-success fw-medium';
          case 'reservada':
              return 'text-warning fw-medium';
          case 'cancelada':
              return 'text-danger fw-medium';
          default:
              return 'text-muted fw-medium';
      }
    }
    return 'text-muted fw-medium'
  }
}