import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MilesService {
  private apiUrl = 'http://localhost:3000'; // URL do API Gateway

  constructor(private http: HttpClient) {}

  // Obter saldo de milhas do cliente
  getMilesBalance(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers/${id}/miles/balance`);
  }

  // Obter histórico de compras
  getPurchaseHistory(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers/${id}/miles/purchase-history`);
  }

  // Obter histórico de uso
  getUsageHistory(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers/${id}/miles/usage-history`);
  }
}
