import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CustomerHomeService {
  url = 'http://localhost:3000/flights';

  constructor() { }

  async getFlights() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(this.url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return result;
    } catch (error) {
      console.error("Erro ao recuperar voos ", error);
      throw error;
    }
  }
}