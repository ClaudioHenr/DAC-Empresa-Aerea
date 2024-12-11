import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalBuyMilesComponent } from '../modals/modal-buy-miles/modal-buy-miles.component';
import { ModalCancelReserveComponent } from '../modals/modal-cancel-reserve/modal-cancel-reserve.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";
import { LoginService } from '../../../authentication/login/services/login.service';
import { ViewBookingService } from '../view-booking/services/view-booking.service';
import { BookingView } from '../../../../shared/models/BookingView.model';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [
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
  selectedBooking: any;
  customerName: string = '';

  constructor(
    private http: HttpClient, 
    private loginService: LoginService, 
    private viewBookingService: ViewBookingService
  ) {}

  ngOnInit() {
    this.getCustomerData();
    this.fetchBookings();
    this.fetchCustomerData();
  }

  onMilesUpdated(): void {
    this.fetchCustomerData(); 
  }

  getCustomerData() {
    const user = JSON.parse(localStorage.getItem("user") || '{}');
    if (user && user.name && user.miles !== undefined) {
      this.customerName = user.name;
      this.milesBalance = user.miles;
      console.log(this.milesBalance)
    } else {
      console.error("Usuário não encontrado no localStorage.");
    }
  }

  fetchCustomerData() {
    const user = JSON.parse(localStorage.getItem("user") || '{}');
    console.log(user);
    if (user && user.id) {
      const customerId = user.id;
      this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
        this.milesBalance = data.miles;
      });
    } else {
      console.error("Usuário não encontrado no localStorage.");
    }
  }


  async fetchBookings() {
    const customerId = this.user.id
    const result = await this.viewBookingService.getBookings(customerId)
    this.listBooking = result.data.bookings    
  }

  setSelectedBooking(booking: any): void {
    this.selectedBooking = booking;
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