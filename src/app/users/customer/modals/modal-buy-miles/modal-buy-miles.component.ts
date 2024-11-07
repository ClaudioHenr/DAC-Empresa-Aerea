import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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

  saldoAtual: number = 0;
  valorPorMilha: number = 5.00;
  quantidade: number = 2;
  valorTotal: number = this.calcularValorTotal();
  customerId: string = 'ad237302-4b0c-48bf-abd9-d01a0c6e8a2e'; // Replace with actual customer ID

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCustomerMiles();
  }

  fetchCustomerMiles(): void {
    this.http.get<any>(`http://localhost:3000/customers/${this.customerId}`).subscribe(data => {
      this.saldoAtual = data.miles;
    });
  }

  calcularValorTotal(): number {
    return this.quantidade * this.valorPorMilha;
  }

  atualizarValorTotal(): void {
    this.valorTotal = this.calcularValorTotal();
  }

  confirmarCompra(): void {
    const payload = { miles: this.quantidade };
    this.http.patch(`http://localhost:8080/customers/${this.customerId}/miles/buy`, payload).subscribe(response => {
      this.fetchCustomerMiles(); // Update the current balance after purchase
    });
    console.log('teste');
  }
}