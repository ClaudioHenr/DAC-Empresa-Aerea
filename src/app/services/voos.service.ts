
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VoosService {

    private apiUrl = 'http://localhost:3000'; // URL do API Gateway

  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Gera cabeçalhos de autenticação com o token JWT.
   * @returns HttpHeaders com o token JWT
   */
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  /**
   * Lista todos os voos disponíveis.
   * @returns Observable com a lista de voos
   */
  listarVoos(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  /**
   * Adiciona um novo voo.
   * @param voo - Dados do voo a ser adicionado
   * @returns Observable com o resultado da operação
   */
  adicionarVoo(voo: any): Observable<any> {
    return this.http.post(this.apiUrl, voo, { headers: this.getAuthHeaders() });
  }

  /**
   * Consulta um voo específico por ID.
   * @param id - ID do voo a ser consultado
   * @returns Observable com os detalhes do voo
   */
  consultarVoo(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  /**
   * Atualiza um voo existente.
   * @param id - ID do voo a ser atualizado
   * @param voo - Dados atualizados do voo
   * @returns Observable com o resultado da operação
   */
  atualizarVoo(id: string, voo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, voo, { headers: this.getAuthHeaders() });
  }

  /**
   * Remove um voo.
   * @param id - ID do voo a ser removido
   * @returns Observable com o resultado da operação
   */
  removerVoo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
