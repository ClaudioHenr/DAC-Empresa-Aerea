import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ViewBookingService {
  private url: string = "http://localhost:3000/bookings/view"

  constructor() { }

  getBookings(idUser: String) {
    try {
      const result = axios.get(`${this.url}/${idUser}`);
      return result
    } catch (error) {
      console.log("Erro ao recurar reservas: ", error)
      throw error
    }
  }

}
