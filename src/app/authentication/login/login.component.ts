import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Authentication, AuthenticationType } from '../../../shared/models/Authentication.model';
import { NgIf } from '@angular/common';
import { LoginService } from './services/login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm

  auth: Authentication = new Authentication()
  
  public errorMessage = ''

  constructor( private loginService: LoginService, private router: Router ) {}

  async authentication() {
    try {
      console.log("Iniciando autenticação...");
      const result = await this.loginService.login(this.auth)
      console.log("Resultado da autenticação: ", result);
      this.loginService.setLocalStorage("user", result.data.user)
      this.loginService.setLocalStorage("auth", result.data.auth)
      this.loginService.setLocalStorage("token", result.data.token) 
      this.handleLogin(result)
    } catch (error: any) {
      console.error("Erro na autenticação: ", error);
      this.errorMessage = "Erro ao fazer login. Por favor, tente novamente.";
    }
  }

  handleLogin(result: any) {
    const typeUser: string = result.data.auth.type
    console.log("Tipo de usuário: ", typeUser);
    if (typeUser == AuthenticationType.EMPLOYEE) {
      console.log("Redirecionando para /home-employee");
      this.router.navigate(['/home-employee'])
    } else if (typeUser === AuthenticationType.CUSTOMER) {
      console.log("Redirecionando para /home");
      this.router.navigate(['/home'])
    } else {
      console.log("Tipo de usuário não reconhecido");
    }
  }
}