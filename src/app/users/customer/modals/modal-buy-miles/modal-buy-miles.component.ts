import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';

@Component({
  selector: 'app-modal-buy-miles',
  standalone: true,
  imports: [
    FormsModule,
    ReusableModalComponent
],
  templateUrl: './modal-buy-miles.component.html',
  styleUrl: './modal-buy-miles.component.css'
})

export class ModalBuyMilesComponent implements OnInit {

  saldoAtual: number = 10000;
  valorPorMilha: number = 5.00;
  quantidade: number = 2;
  valorTotal: number = this.calcularValorTotal();

  constructor() { }

  ngOnInit(): void {
  }

  calcularValorTotal(): number {
    return this.quantidade * this.valorPorMilha;
  }

  atualizarValorTotal(): void {
    this.valorTotal = this.calcularValorTotal();
  }

  confirmarCompra(): void {

  }

}