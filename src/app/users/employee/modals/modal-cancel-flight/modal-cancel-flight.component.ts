import { Component } from '@angular/core';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';

@Component({
  selector: 'app-modal-cancel-flight',
  standalone: true,
  imports: [
    ReusableModalComponent
  ],
  templateUrl: './modal-cancel-flight.component.html',
  styleUrl: './modal-cancel-flight.component.css'
})
export class ModalCancelFlightComponent {


  cancelFlight() {

  }
}
