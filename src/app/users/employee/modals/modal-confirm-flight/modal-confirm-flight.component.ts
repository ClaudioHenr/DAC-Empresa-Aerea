import { Component } from '@angular/core';
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

  confirmFlight() {}
}
