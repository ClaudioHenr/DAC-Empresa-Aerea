import { Component, OnInit } from '@angular/core';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../../authentication/login/services/login.service';
import { Airport } from '../../../../../shared/models/Airport.model';
import { NgFor } from '@angular/common';
import { Flight } from '../../../../../shared/models/Flight.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-page-booking',
  standalone: true,
  imports: [
    NavbarCustomerComponent,
    FormsModule,
    NgFor,
    RouterLink
  ],
  templateUrl: './first-page-booking.component.html',
  styleUrl: './first-page-booking.component.css'
})
export class FirstPageBookingComponent implements OnInit {
  flight: Flight = new Flight();
  listaAeroportos: Airport[] = []
  listaVoos: Flight[] = [] 
  currentScreen = 1; // Define a tela atual, 1 para first-page-booking.component
  milesBalance: number = 0;
  purchaseHistory: any[] = [];
  usageHistory: any[] = [];

  // Adicione métodos para mudar a tela, se necessário
  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }

  constructor(private http: HttpClient, private loginService: LoginService) {}

  ngOnInit() {
    this.fetchAirports();
  }

  fetchAirports() {
    this.http.get<any>('http://localhost:3000/flights/airports').subscribe(data => {
      console.log("Dados recebidos dos aeroportos:", data.airports);
      this.listaAeroportos = data.airports
    }, error => {
      console.error("Erro ao buscar aeroportos:", error);
    });
  }

  searchFlights() {
    this.http.post<any>('http://localhost:3000/flights/travels', this.flight).subscribe(data => {
      console.log("Voos recebidos:", data.travels);
      this.listaVoos = data.travels;
    }, error => {
      console.error("Erro ao buscar voos:", error);
    });
  }

  fetchCustomerData() {
    const user = this.loginService.getLocalStorage("user")
    console.log(user)
    const customerId = 'e1c347cc-056b-4a76-b371-262eae7140b0'; // Replace with actual customer ID
    // const customerId = user.id;
    this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
      this.milesBalance = data.miles;
    });
  }
}
