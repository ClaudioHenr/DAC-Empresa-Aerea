import { Component, OnInit } from '@angular/core';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../../authentication/login/services/login.service';
import { Airport } from '../../../../../shared/models/Airport.model';
import { CommonModule, NgFor } from '@angular/common';
import { Flight } from '../../../../../shared/models/Flight.model';
import { FormsModule } from '@angular/forms';
import { FlightSelectionService } from '../services/flight-selection.service';

@Component({
  selector: 'app-first-page-booking',
  standalone: true,
  imports: [
    NavbarCustomerComponent,
    FormsModule,
    NgFor,
    CommonModule
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

  constructor(private http: HttpClient, 
    private loginService: LoginService, 
    private flightSelectionService: FlightSelectionService,
    private router: Router
  ) {}

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
    console.log(this.flight)
    this.http.post<any>('http://localhost:3000/flights/travels', this.flight).subscribe(data => {
      console.log("Voos recebidos:", data.travels);
          // Filtra os voos para incluir apenas da data atual para frente
      const now = new Date();
      this.listaVoos = data.travels.filter((travel: Flight) => {
        if (travel.dataVoo) {
          const dataVoo: Date = new Date(travel.dataVoo);
          const nowTimestamp: Number = now.getTime();
          const dataFlightTimestamp: Number = dataVoo.getTime()
          return (
            dataFlightTimestamp >= nowTimestamp
          );
        }
        return false
    });
    }, error => {
      console.error("Erro ao buscar voos:", error);
    });
  }


  fetchCustomerData() {
    const user = this.loginService.getLocalStorage("user")
    if (user?.id) {
      this.http.get<any>(`http://localhost:3000/customers/${user.id}`).subscribe(data => {
        this.milesBalance = data.miles;
      }, error => {
        console.error("Erro ao buscar dados do cliente:", error);
      });
    } else {
      console.error("Usuário não encontrado no localStorage.");
    }
  }

  chooseFlight(flight: Flight) {
    console.log("Voo selecionado:", flight);
    this.flightSelectionService.setFlight(flight);
    this.router.navigate(['booking/second-page']);
  }
}
