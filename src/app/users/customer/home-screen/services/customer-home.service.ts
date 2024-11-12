import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CustomerHomeService {
  url = 'http://localhost:3000/flights'

  constructor() { }

  getFlights() {
    try {
      const result = axios.get(this.url)
      return result 
    } catch (error) {
      console.error("Erro ao recuperar voos ", error)
      throw error
    }
  }
}
