import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReusableModalComponent } from "../../../../../shared/modals/base/reusable-modal/reusable-modal.component";
import { BookingView } from '../../../../../shared/models/BookingView.model';
import { CheckinBookingService } from './services/checkin-booking.service';

@Component({
  selector: 'app-modal-check-in',
  standalone: true,
  imports: [
    CommonModule,
    ReusableModalComponent
],
  templateUrl: './modal-check-in.component.html',
  styleUrl: './modal-check-in.component.css'
})

export class ModalCheckInComponent {
  @Input() selectedBooking?: BookingView | null = null;

  constructor(private checkinBookingService: CheckinBookingService ) {}

  async submitCheckInBooking() {
    const result = await this.checkinBookingService.checkInBooking(this.selectedBooking?.id);
    alert(`${result.data.message}`)
  }

}