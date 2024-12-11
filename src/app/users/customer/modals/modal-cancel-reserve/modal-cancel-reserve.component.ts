import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReusableModalComponent } from "../../../../../shared/modals/base/reusable-modal/reusable-modal.component";
import { BookingView } from '../../../../../shared/models/BookingView.model';
import { CommonModule } from '@angular/common';
import { CancelBookingService } from './services/cancel-booking.service';

@Component({
  selector: 'app-modal-cancel-reserve',
  standalone: true,
  imports: [
    FormsModule,
    ReusableModalComponent,
    CommonModule
  ],
  templateUrl: './modal-cancel-reserve.component.html',
  styleUrl: './modal-cancel-reserve.component.css'
})

export class ModalCancelReserveComponent {
  @Input() showModal: boolean = false;
  @Input() selectedBooking?: BookingView | null = null;

  constructor(private cancelBooking: CancelBookingService) {}

  async confirmarCancelamento() {
    // Status da reserva deve ir para CANCELADA
    const result = await this.cancelBooking.cancelBooking(this.selectedBooking?.id);
    alert(`${result.data.message}`)
  }
  
}
