import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarCustomerComponent } from "../../../../layout/navbar-customer/navbar-customer.component";
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../../authentication/login/services/login.service';
import { Flight } from '../../../../../shared/models/Flight.model';
import { FlightSelectionService } from '../services/flight-selection.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateBooking } from '../../../../../shared/models/CreateBooking';
import { CreateBookingService } from '../services/create-booking.service';

@Component({
  selector: 'app-second-page-booking',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NavbarCustomerComponent,
    CommonModule,
],
  templateUrl: './second-page-booking.component.html',
  styleUrl: './second-page-booking.component.css'
})
export class SecondPageBookingComponent implements OnInit {
  currentScreen = 2; // Define a tela atual, 1 para first-page-booking.component
  selectedFlight: Flight | null = null;
  createBooking: CreateBooking = new CreateBooking();
  milesBalance: number = 0;

  // Adicione métodos para mudar a tela, se necessário
  changeScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }

  constructor(private http: HttpClient, 
    private loginService: LoginService,
    private flightSelectionService: FlightSelectionService,
    private router: Router,
    private createBookingService: CreateBookingService
  ) {}

  ngOnInit() {
    this.createBooking.qtdPassagens = 1;
    this.createBooking.qtdMilhas = 0;
    this.fetchCustomerData();
    this.selectedFlight = this.flightSelectionService.getFlight();
    console.log("Selected flight: ", this.selectedFlight)
  }

  get totalValor(): number {
    const total = (this.selectedFlight?.valorPassagem || 0) * (this.createBooking.qtdPassagens || 0) - (this.createBooking.qtdMilhas || 0) * 5;
    return Math.max(total, 0);
  }

  get milhasNecessarias(): number {
    const valorPassagem = this.selectedFlight?.valorPassagem || 0;
    const quantidadePassagens = this.createBooking.qtdPassagens || 0;
  
    // Calcula as milhas necessárias para a quantidade de passagens
    return (valorPassagem * quantidadePassagens) / 5;
  }

  fetchCustomerData() {
    const user = this.loginService.getLocalStorage("user")
    // console.log(user)
    const customerId = 'e1c347cc-056b-4a76-b371-262eae7140b0'; // Replace with actual customer ID
    // const customerId = user.id;
    this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
      this.milesBalance = data.miles;
    });
    this.milesBalance = 1000
  }

  async submitBooking() {
    try {
      this.createBooking.codFlight = this.selectedFlight?.codigoVoo
      this.createBooking.idUser = 'e1c347cc-056b-4a76-b371-262eae7140b0'
      console.log("Selected flight: ", this.selectedFlight)
      console.log("CreateBoking: ", this.createBooking)
      const result = await this.createBookingService.registerBooking(this.createBooking);
    } catch (error: any) {
      console.error(error.response.data.message)
    }
    
    // this.router.navigate(['/booking/last-page'])
  }

}
