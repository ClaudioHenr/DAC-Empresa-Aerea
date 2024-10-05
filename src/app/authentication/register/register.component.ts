import { Component, ViewChild } from '@angular/core';
import { Customer } from '../../../shared/models/Customer.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Address } from '../../../shared/models/Address.model';
import { NgIf } from '@angular/common';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: NgForm

  customer: Customer = {
    address: new Address()
  }

  public errorMessage = ''

  constructor(private registerService: RegisterService, private route: Router) {}

  async register() {
    try {
      const result = await this.registerService.register(this.customer)
      this.handleRegister(result)
    } catch (error: any) {
      console.error(error.response.data.message) 
    }
  }

  handleRegister(result: any) {
    console.log("Retorno: ", result.data.message)
    alert(`${result.data.message}\nSenha enviado para o seu email`)
    this.route.navigate(['/l'])
  }

}
