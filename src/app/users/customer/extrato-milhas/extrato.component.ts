import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarCustomerComponent } from '../../../layout/navbar-customer/navbar-customer.component';
import { MilesService } from '../../../services/miles.services';

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

  constructor(private milesService: MilesService) {}

  ngOnInit(): void {
    const customerId = '9bb58f2b';

    this.milesService.getMilesBalance(customerId).subscribe(
      (data) => this.milesBalance = data.balance,
      (error) => this.errorMessage = 'Erro ao obter saldo de milhas'
    );

    this.milesService.getPurchaseHistory(customerId).subscribe(
      (data) => this.purchaseHistory = data.history,
      (error) => this.errorMessage = 'Erro ao obter histórico de compras'
    );

    this.milesService.getUsageHistory(customerId).subscribe(
      (data) => this.usageHistory = data.history,
      (error) => this.errorMessage = 'Erro ao obter histórico de uso'
    );
  }
}
