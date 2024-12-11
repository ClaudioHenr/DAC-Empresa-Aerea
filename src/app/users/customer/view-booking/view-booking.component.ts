import { Component, OnInit } from '@angular/core';
import { NavbarCustomerComponent } from "../../../layout/navbar-customer/navbar-customer.component";
import { ModalBuyMilesComponent } from '../modals/modal-buy-miles/modal-buy-miles.component';
import { HttpClient } from '@angular/common/http';
import { ViewBookingService } from './services/view-booking.service';
import { CommonModule, NgFor } from '@angular/common';
import { BookingView } from '../../../../shared/models/BookingView.model';
import { LoginService } from '../../../authentication/login/services/login.service';
import { StorageService } from '../../../services/storage.service';

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
  customerName: string = '';
  customerId: string = ''; // Inicialize o customerId

  constructor(private http: HttpClient, private viewBookingService: ViewBookingService, private loginService: LoginService, private storageService: StorageService) {}

  ngOnInit() {
    this.fetchBookings();
    this.getCustomerData();
    this.fetchCustomerData();
  }

  getCustomerData() {
    const user = JSON.parse(localStorage.getItem("user") || '{}');
    if (user && user.name && user.miles !== undefined) {
      this.customerName = user.name;
      this.milesBalance = user.miles;
      this.customerId = user.id;
      console.log(this.milesBalance)
    } else {
      console.error("Usuário não encontrado no localStorage.");
    }
  }

  onMilesUpdated(): void {
    this.fetchCustomerData(); 
  }

  async fetchBookings() {
    try {
      const user = this.loginService.getLocalStorage("user");
      if (user && user.id) {
        const customerId = user.id;
        const result = await this.viewBookingService.getBookings(customerId);
        this.bookings = result.data.bookings;
        console.log(this.bookings);
      } else {
        console.error("Usuário não encontrado no localStorage.");
      }
    } catch (error: any) {
      console.error("Erro ao buscar reservas:", error);
    }
  }

  fetchCustomerData() {
    const user = this.loginService.getLocalStorage("user");
    if (user && user.id) {
      const customerId = user.id;
      this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
        this.milesBalance = data.miles;
      }, error => {
        console.error("Erro ao buscar dados do cliente:", error);
      });
    } else {
      console.error("Usuário não encontrado no localStorage.");
    }
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
