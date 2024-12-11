import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';

@Component({
  selector: 'app-modal-confirm-flight',
  standalone: true,
  imports: [
    ReusableModalComponent
  ],
  templateUrl: './modal-confirm-flight.component.html',
  styleUrl: './modal-confirm-flight.component.css'
})
export class ModalConfirmFlightComponent {
  constructor(private http: HttpClient) {}

  confirmFlight() {
    const flightId = 'some-flight-id'; // Replace with actual flight ID
    this.http.patch(`http://localhost:3000/flights/${flightId}`, { status: 'CONFIRMADO' })
      .subscribe(response => {
        console.log('Flight confirmed:', response);
      }, error => {
        console.error('Error confirming flight:', error);
      });
  }
}