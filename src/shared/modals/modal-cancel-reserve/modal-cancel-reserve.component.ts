import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Reserva {
  origem: string;
  destino: string;
  data: Date;
  horario: string;
  valorPago: number;
  milhas: number;
  valorTotal: number;
}

@Component({
  selector: 'app-modal-cancel-reserve',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './modal-cancel-reserve.component.html',
  styleUrl: './modal-cancel-reserve.component.css'
})

export class ModalCancelReserveComponent {
//  @Input() reserva: Reserva;
  @Input() showModal: boolean = false;
  @Output() cancelado = new EventEmitter<void>();

  confirmarCancelamento() {
    this.cancelado.emit();
    this.showModal = false;
  }
  
}