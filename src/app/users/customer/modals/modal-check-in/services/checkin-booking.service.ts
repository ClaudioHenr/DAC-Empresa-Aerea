import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CheckinBookingService {
  url: string = 'http://localhost:3000/bookings/checkin'

  constructor() { }

  checkInBooking(id: string | undefined) {
    try {
      const result = axios.patch(`${this.url}/${id}`)
      return result
    } catch (error) {
      throw error
    }
  }
}
