import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CancelBookingService {
  url: string = "http://localhost:3000/bookings/cancel"

  constructor() { }

  cancelBooking(id: string | undefined) {
    try {
      const result = axios.patch(`${this.url}/${id}`)
      return result 
    } catch (error) {
      throw error
    }
  }
}
