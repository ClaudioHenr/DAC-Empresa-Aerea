import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReusableModalComponent } from "../../../../../shared/modals/base/reusable-modal/reusable-modal.component";
import { NgIf } from '@angular/common';

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
    NgIf,
    FormsModule,
    ReusableModalComponent
  ],
  templateUrl: './modal-cancel-reserve.component.html',
  styleUrl: './modal-cancel-reserve.component.css'
})

export class ModalCancelReserveComponent {
  @Input() showModal: boolean = false;
  @Input()
  flight!: {
    origin: string;
    destination: string;
    time: string;
    data:Date;
    price:number;
  };
  // @Output() cancelado = new EventEmitter<void>();

  confirmarCancelamento() {
    // this.cancelado.emit();
    // this.showModal = false;
  }
  
}