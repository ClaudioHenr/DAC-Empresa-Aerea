import { Injectable } from '@angular/core';
import { CreateBooking } from '../../../../../shared/models/CreateBooking';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CreateBookingService {
  url = 'http://localhost:3000/bookings/create'

  constructor() { }

  registerBooking(createBooking: CreateBooking) {
    try {
      console.log("Enviando: ", createBooking)
      const result = axios.post(this.url, createBooking)
      console.log("Resultado cadastro: ", result)
      return result
    } catch (error) {
      console.log("Erro ao registrar: ", error)
      throw error
    }
  }
}
