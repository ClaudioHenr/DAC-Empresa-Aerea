import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { Flight } from '../../../../shared/models/Flight.model';
import { NgIf } from '@angular/common';
import { CreateFlightService } from './services/create-flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flight',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NavbarComponent
  ],
  templateUrl: './create-flight.component.html',
  styleUrl: './create-flight.component.css'
})
export class CreateFlightComponent {
  @ViewChild('flightForm') loginForm!: NgForm
  flight: Flight = new Flight()
  public errorMessage = ''

  constructor(private createFlightService: CreateFlightService, private route: Router) {}

  async createFlight() {
    try {
      this.flight.statusVoo = "CONFIRMADO"
      this.flight.qtdPoltronasOcupadas = 0
      this.flight.valorMilhas = 1,50
      const result = await this.createFlightService.registerFlight(this.flight)
      alert(`Voo cadastrado com sucesso`)
      this.route.navigate(['/home-employee'])

    } catch (error: any) {
      console.error(error.response.data.message)
      this.errorMessage = error.response.data.message
    }
  }
}
