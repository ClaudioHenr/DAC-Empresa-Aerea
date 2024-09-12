import { Component, ViewChild } from '@angular/core';
import { Customer } from '../../shared/models/customer.model';
import { Router } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Address } from '../../shared/models/address.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    //ReactiveFormsModule,
    FormsModule,
    NgIf
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
