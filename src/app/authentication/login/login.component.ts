import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Authentication, AuthenticationType } from '../../../shared/models/Authentication.model';
import { NgIf } from '@angular/common';
import { LoginService } from './services/login.service';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../layout/navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    NavbarComponent
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
      this.handleLogin(result) 
    } catch (error: any) {
      if (error.response.status === 401) {
        console.error("Erro ao logar: ", error.response.data.message)
        this.errorMessage = error.response.data.message
      }
    }
  }

  handleLogin(result: any) {
    const roleUser: number = result.data.auth.role
    if (roleUser == AuthenticationType.EMPLOYEE) {
      console.log("it is a employee")
      this.router.navigate(['/eh'])
    } else if (roleUser === AuthenticationType.CUSTOMER) {
      console.log("it is a customer")
      this.router.navigate(['/home'])
    } else {
      console.log("who is this dude??")
    }
  }
}
