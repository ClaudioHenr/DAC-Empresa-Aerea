
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly TOKEN_KEY = 'jwtToken';  // Chave para armazenar o token no localStorage
  private apiUrl = 'http://localhost:3000'; // URL do API Gateway

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Realiza o login e salva o token JWT no localStorage.
   * @param username - Nome de usuário
   * @param password - Senha
   */
  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password }).subscribe(response => {
      if (response.token) {
        this.saveToken(response.token);
        this.router.navigate(['/dashboard']);  // Redireciona para a página inicial após login
      }
    }, error => {
      console.error("Erro de autenticação", error);
    });
  }

  /**
   * Salva o token JWT no localStorage.
   * @param token - O token JWT
   */
  private saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Obtém o token JWT do localStorage.
   * @returns O token JWT ou null se não estiver presente
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Verifica se o usuário está autenticado.
   * @returns true se o token estiver presente e válido, caso contrário false
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    
    const tokenExpiration = this.getTokenExpiration(token);
    return tokenExpiration > Date.now();
  }

  /**
   * Decodifica o token JWT para obter a data de expiração.
   * @param token - O token JWT
   * @returns O timestamp de expiração do token em milissegundos
   */
  private getTokenExpiration(token: string): number {
    const payload = JSON.parse(atob(token.split('.')[1]));  // Decodifica o payload do token JWT
    return payload.exp * 1000; // Converte para milissegundos
  }

  /**
   * Remove o token JWT do localStorage (logout).
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);  // Redireciona para a página de login
  }
}
