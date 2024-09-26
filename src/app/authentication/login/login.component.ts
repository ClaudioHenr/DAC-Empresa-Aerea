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

  constructor( private loginService: LoginService, private router: Router ) {}

  public errorMessage = ''

  async authentication() {
    const result = await this.loginService.login(this.auth.login, this.auth.password)
    this.handleLogin(result)
  }

  handleLogin(result: any) {
    const roleUser: number = result.data.login.roleUser
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
