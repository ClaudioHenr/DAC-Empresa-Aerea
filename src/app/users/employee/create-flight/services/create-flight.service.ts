import { Injectable } from '@angular/core';
import { Flight } from '../../../../../shared/models/Flight.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CreateFlightService {
  url = 'http://localhost:3000/flights'

  constructor() { }

  registerFlight(flight: Flight) {
    try {
      const result = axios.post(this.url, flight)
      console.log("Resultado cadastro: ", result)
      return result
    } catch (error) {
      console.log("Erro ao registrar: ", error)
      throw error
    }
  }
}
