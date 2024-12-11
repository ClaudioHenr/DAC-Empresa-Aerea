import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalCheckInComponent } from "../modals/modal-check-in/modal-check-in.component";
import { CommonModule } from '@angular/common';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";
import { BookingView } from '../../../../shared/models/BookingView.model';
import { LoginService } from '../../../authentication/login/services/login.service';
import { ViewBookingService } from '../view-booking/services/view-booking.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-booking',
  standalone: true,
  imports: [
    ModalCheckInComponent,
    FormsModule,
    CommonModule,
    NavbarCustomerComponent
],
  templateUrl: './check-booking.component.html',
  styleUrl: './check-booking.component.css'
})
export class CheckBookingComponent implements OnInit {
  codBookingToSearch: string = '';
  listBooking: BookingView[] = [];
  bookingFound: BookingView[] = [];
  user = this.loginService.getLocalStorage("user")
  selectedBooking: any;

  constructor( 
    private loginService: LoginService, 
    private viewBookingService: ViewBookingService,
  ) {}

  ngOnInit(): void {
    this.fetchBookings()
  }

  async fetchBookings() {
    const customerId = this.user.id
    const result = await this.viewBookingService.getBookings("e1c347cc-056b-4a76-b371-262eae7140b0")
    console.log(result)
    this.listBooking = result.data.bookings    
  }

  filterBookingByCod() {
    this.bookingFound = this.listBooking.filter(booking => {
      return booking.codBooking === this.codBookingToSearch
    })
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
