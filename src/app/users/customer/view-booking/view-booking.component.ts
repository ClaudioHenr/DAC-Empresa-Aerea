import { Component, OnInit } from '@angular/core';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";
import { ModalBuyMilesComponent } from '../modals/modal-buy-miles/modal-buy-miles.component';
import { HttpClient } from '@angular/common/http';
import { ViewBookingService } from './services/view-booking.service';
import { CommonModule, NgFor } from '@angular/common';
import { BookingView } from '../../../../shared/models/BookingView.model';
import { LoginService } from '../../../authentication/login/services/login.service';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [
    NavbarCustomerComponent,
    ModalBuyMilesComponent,
    NgFor,
    CommonModule
  ],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent implements OnInit {
  bookings: BookingView[] = [];
  milesBalance: number = 0;
  purchaseHistory: any[] = [];
  usageHistory: any[] = [];

  constructor(private http: HttpClient, private viewBookingService: ViewBookingService, private loginService: LoginService) {}

  ngOnInit() {
    // this.fetchCustomerData();
    this.fetchBookings();
  }

  async fetchBookings() {
    try {
      const user = this.loginService.getLocalStorage("user")
      // const customerId = user.id
      const customerId = "e1c347cc-056b-4a76-b371-262eae7140b0"
      const result = await this.viewBookingService.getBookings(customerId);
      this.bookings = result.data.bookings
      console.log(this.bookings)
    } catch (error: any) {
      throw error
    }
  }

  fetchCustomerData() {
    const user = this.loginService.getLocalStorage("user")
    const customerId = 'e1c347cc-056b-4a76-b371-262eae7140b0'; // Replace with actual customer ID
    this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
      this.milesBalance = data.miles;
    });
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
