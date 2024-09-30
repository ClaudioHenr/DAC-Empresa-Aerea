import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-check-in',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './modal-check-in.component.html',
  styleUrl: './modal-check-in.component.css'
})

export class ModalCheckInComponent {
  
  @Input() showModal: boolean = false;
  @Input() flights: { 
	origin: string; 
	destination: string; 
	time: string }[] = [];
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() checkInEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  checkIn() {
    this.checkInEvent.emit();
  }
}