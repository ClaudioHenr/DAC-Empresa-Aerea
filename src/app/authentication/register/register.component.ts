import { Component, ViewChild } from '@angular/core';
import { Customer } from '../../../shared/models/Customer.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Address } from '../../../shared/models/Address.model';
import { NgIf } from '@angular/common';

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

  customer: Customer = new Customer()
  address: Address = new Address()

  constructor(private route: Router) {}

  
}
