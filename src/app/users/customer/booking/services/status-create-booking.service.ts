import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusCreateBookingService {
  private isCreateBooking: boolean = false;

  constructor() { }

  setStatusCreateBooking(status: boolean): void {
    this.isCreateBooking = status;
  }

  getStatusCreateBooking(): boolean {
    return this.isCreateBooking;
  }
}
