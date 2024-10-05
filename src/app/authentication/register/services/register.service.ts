import { Injectable } from '@angular/core';
import { Customer } from '../../../../shared/models/Customer.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:3000/customers'

  constructor() { }

  register(customer: Customer) {
    const result = axios.post(this.url, customer)
    console.log("Resultado cadastro: ", result)
    return result
  }
}
