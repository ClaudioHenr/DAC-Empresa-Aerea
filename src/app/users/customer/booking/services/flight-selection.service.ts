import { Injectable } from '@angular/core';
import { Flight } from '../../../../../shared/models/Flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightSelectionService {
  private selectedFlight: Flight | null = null;

  constructor() { }

  setFlight(flight: Flight): void {
    this.selectedFlight = flight;
  }

  getFlight(): Flight | null {
    return this.selectedFlight;
  }
}
