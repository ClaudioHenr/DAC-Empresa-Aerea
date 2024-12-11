import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';
import { StorageService } from '../../../../services/storage.service';

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

  @Output() milesUpdated = new EventEmitter<void>();

  saldoAtual: number = 0;
  valorPorMilha: number = 5.00;
  quantidade: number = 2;
  valorTotal: number = this.calcularValorTotal();
  customerId: string = ''; // Inicialize o customerId

  constructor(private http: HttpClient, private storageService: StorageService) { }

  ngOnInit(): void {
    this.getCustomerIdFromLocalStorage();
    this.fetchCustomerMiles();
  }

  getCustomerIdFromLocalStorage(): void {
    const user = this.storageService.getItem("user");
    if (user && user.id) {
      this.customerId = user.id;
    } else {
      console.error("Usuário não encontrado no localStorage.");
    }
  }

  fetchCustomerMiles(): void {
    const token = this.storageService.getItem("token");
    console.log("Token enviado no fetchCustomerMiles: ", token); // Adicionar console.log
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<any>(`http://localhost:3000/customers/${this.customerId}`, { headers }).subscribe(data => {
      this.saldoAtual = data.miles;
    }, error => {
      console.error("Erro ao buscar saldo de milhas:", error);
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
    const token = this.storageService.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.patch(`http://localhost:3000/customers/${this.customerId}/miles/buy`, payload, { headers }).subscribe(response => {
      this.fetchCustomerMiles();
      this.milesUpdated.emit();
      this.closeModal(); 
      alert('Milhas compradas com sucesso!');
    }, error => {
      console.error("Erro ao confirmar compra:", error);
    });
    console.log('Compra confirmada');
  }

  closeModal(): void {
    const modalElement = document.getElementById('buyMilesModal');
    if (modalElement) {
      modalElement.style.display = 'none';
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  }
}