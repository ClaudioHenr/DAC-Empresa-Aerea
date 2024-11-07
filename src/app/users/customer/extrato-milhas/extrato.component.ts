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
  }

  fetchCustomerData() {
    const customerId = 'ad237302-4b0c-48bf-abd9-d01a0c6e8a2e'; // Replace with actual customer ID
    this.http.get<any>(`http://localhost:3000/customers/${customerId}`).subscribe(data => {
      this.milesBalance = data.miles;
    });
  }
}
