import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { Flight } from '../../../../shared/models/Flight.model';
import { CommonModule, NgFor } from '@angular/common';
import { BoardingModalComponent } from "../modals/boarding-modal/boarding-modal.component";
import { ModalConfirmFlightComponent } from "../modals/modal-confirm-flight/modal-confirm-flight.component";
import { ModalCancelFlightComponent } from "../modals/modal-cancel-flight/modal-cancel-flight.component";
import { RouterLink } from '@angular/router';
import { HomeEmployeeService } from './services/home-employee.service';

@Component({
  selector: 'app-home-employee',
  standalone: true,
  imports: [
    NavbarComponent,
    NgFor,
    CommonModule,
    RouterLink,
    BoardingModalComponent,
    ModalConfirmFlightComponent,
    ModalCancelFlightComponent
],
  templateUrl: './home-employee.component.html',
  styleUrl: './home-employee.component.css'
})
export class HomeEmployeeComponent {
  listFlight: Flight[] = []
  filteredFlights: Flight[] = []

  constructor( private homeEmployeeService: HomeEmployeeService ) {}

  ngOnInit(): void {
    this.fetchFlights()
  }

  async fetchFlights() {
    try {
      const flights = await this.homeEmployeeService.getFlights();
      console.log("Voos: ", flights.data.flights)
      this.listFlight = flights.data.flights
      this.handleFlights()
      console.log(this.filteredFlights)
    } catch (error: any) {
      throw error
    } 
  }

  handleFlights() {
    let now = new Date();
    let nowInHours = now.getTime()
    let hoursAhead = new Date(nowInHours + (48 * 60 * 60 * 1000));
    console.log("Data e hora 48 horas adiante:", hoursAhead.toLocaleString())
    this.filteredFlights = this.listFlight.filter(flight => {
      if (flight.dataVoo) {
        let flightDate = new Date(flight.dataVoo);
        return flightDate < hoursAhead && flightDate > now;
      }
      return false;
    });
  }
}
