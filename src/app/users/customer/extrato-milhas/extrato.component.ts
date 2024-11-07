import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NavbarCustomerComponent } from '../../../layout/navbar-customer/navbar-customer.component';
import { MilesService } from '../../../services/miles.service';

@Component({
  selector: 'app-extrato-milhas',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavbarCustomerComponent
  ],
  providers: [MilesService],
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  public errorMessage = '';
  milesBalance: number = 0;
  purchaseHistory: any[] = [];
  usageHistory: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCustomerData();
    this.fetchTransactions();
  }

  fetchCustomerData() {
    const customerId = 'ad237302-4b0c-48bf-abd9-d01a0c6e8a2e'; // Replace with actual customer ID
    this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
      this.milesBalance = data.miles;
    });
  }

  fetchTransactions() {
    const customerId = 'ad237302-4b0c-48bf-abd9-d01a0c6e8a2e'; // Replace with actual customer ID
    this.http.get<any>(`http://localhost:3000/customers/${customerId}/transactions`).subscribe(data => {
      this.purchaseHistory = data.filter((transaction: any) => transaction.type === 'ENTRADA').map((transaction: any) => ({
        date: this.formatDate(transaction.transactionDate),
        miles: transaction.miles,
        amount: this.formatCurrency(transaction.miles * 5),
        description: transaction.description
      }));
      this.usageHistory = data.filter((transaction: any) => transaction.type === 'SAIDA').map((transaction: any) => ({
        date: this.formatDate(transaction.transactionDate),
        miles: transaction.miles,
        description: transaction.description
      }));
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}