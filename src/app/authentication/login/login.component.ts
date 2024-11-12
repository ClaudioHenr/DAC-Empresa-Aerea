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
      const result = await this.loginService.login(this.auth)
      this.loginService.setLocalStorage("user", result.data.user)
      this.loginService.setLocalStorage("auth", result.data.auth)
      this.handleLogin(result)
    } catch (error: any) {
      throw error
    }
  }

  handleLogin(result: any) {
    const typeUser: string = result.data.auth.type
    console.log(typeof result.data.auth.type)
    if (typeUser == AuthenticationType.EMPLOYEE) {
      this.router.navigate(['/home-employee'])
    } else if (typeUser === AuthenticationType.CUSTOMER) {
      this.router.navigate(['/home'])
    } else {
      console.log("Tipo de usuário não reconhecido")
    }
  }
}
